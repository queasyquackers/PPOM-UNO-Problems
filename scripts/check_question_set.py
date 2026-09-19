"""Pipeline gate for the v6 two-set question format.

One lecture now ships as TWO files with TWO scores:

    Test_XXX_Recall.js  SET A  30 first-order recall items, in lecture order
    Test_XXX_Boards.js  SET B  15 second/third-order board-style items

This script re-verifies every tally the v6 prompt promises in its Part 1, so a
generated file is checked BEFORE it is added to config.js / index.html. It never
writes to the repo; it only reads the files named on the command line.

Run:
    python check_question_set.py Test_CV55_Recall.js Test_CV55_Boards.js
    python check_question_set.py Test_CV55_Recall.js --only-fails
    python check_question_set.py Test_CV54.js --set a          # force a set
    python check_question_set.py Test_*.js --quiet              # one line per file

Exit code is 1 if any check FAILs (2 with --strict if any WARNs), else 0.

Every line is  [PASS|WARN|FAIL]  check name  count vs target  ids ...
Checks marked (heuristic) use a text proxy for something only a human reading
the deck can settle; treat those as "look at these ids", not as a verdict.

Parsing, the stopword lists and the length-giveaway math are lifted from the
existing repo scripts (check_correct_index.py, analyze_longest_answer.py,
analyze_giveaways.py) so the numbers here mean the same thing they do there.
"""
import argparse
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

# ----------------------------------------------------------------------------
# Budgets and quotas, straight from the v6 prompt. One place to edit.
# ----------------------------------------------------------------------------
SPEC = {
    "A": {
        "label": "SET A (recall)",
        "items": 30,
        "keys_per_letter": 6,
        "longest_range": (4, 8),        # key strictly longest, 20% of 30 is 6
        "shortest_range": (4, 8),
        "stem_words": 25,
        "option_words": 8,
        "correct_expl_words": 45,
        "incorrect_expl_words": 22,
        "pearl_words": 25,
        "item_words": 185,
        "correct_expl_sentences": 2,    # at most
        "categories": (6, 10),
        "cat_format": "Topic: Subtopic",
        "max_stems_3plus_numbers": 0,
        "max_numeric_keys": 3,
        "max_all_numeric_option_sets": 1,
        "min_direction_keys": 12,
        "max_arithmetic": 0,
        "answer_minutes": 12,
        "read_minutes": 27,
        "answer_overhead_sec": 5.0,     # think time on top of reading the item
    },
    "B": {
        "label": "SET B (boards)",
        "items": 15,
        "keys_per_letter": 3,
        "longest_range": (2, 4),        # 20% of 15 is 3
        "shortest_range": (2, 4),
        "stem_words": 65,
        "option_words": 12,
        "correct_expl_words": 60,
        "incorrect_expl_words": 35,
        "pearl_words": 30,
        "item_words": 330,
        "correct_expl_sentences": 4,    # at most (3-4 required)
        "categories": (4, 6),
        "cat_format": "System: Topic",
        "max_stems_3plus_numbers": 3,
        "max_numeric_keys": 1,
        "max_all_numeric_option_sets": 1,
        "min_direction_keys": 6,
        "max_arithmetic": 1,
        "max_mechanism_leadins": 7,
        "max_data_only": 2,
        "answer_minutes": 9,
        "read_minutes": 25,
        "answer_overhead_sec": 12.0,
    },
}

READ_WPS = 3.3          # 200 wpm, used for both timing estimates
ECHO_UNIQUE_A = 2       # stem words echoed only by the key (short Set A options)
ECHO_UNIQUE_B = 3       # matches analyze_giveaways.py ECHO_UNIQUE_THRESHOLD
DUP_STEM_JACCARD = 0.60 # content-word overlap that reads as the same question

# ----------------------------------------------------------------------------
# Lexicons
# ----------------------------------------------------------------------------
# Lifted verbatim from scripts/analyze_giveaways.py so "distinctive word" means
# the same thing in both tools.
STOPWORDS = set("""
a an and are as at be been being but by for from had has have he her his in into is
it its of on or that the their them then there these they this to was were what when
which who will with would you your about above after again against all am any because
before below between both did do does doing down during each few further here how if
more most no nor not now off once only other our out over own same should so some such
than too under until up very while most also most patient most likely best following
which most these those his her their during while where whom whose because although
though within without across toward towards onto per via due such more less than then
""".split())

GENERIC = set("""
patient woman man male female year years old presents history shows reveals reveal
exam examination findings finding likely most cause causes caused diagnosis diagnose
treatment treat treated therapy drug drugs agent agents class mechanism action effect
effects increased decreased increase decrease elevated reduced level levels blood cell
cells disease disorder syndrome condition lecturer states emphasizes describes asks
question following which best initial next step management clinical because would
correct answer option stage form type primary secondary acute chronic without with
""".split())

DIRECTION_RE = re.compile(
    r"\b(increas\w*|decreas\w*|elevat\w*|reduc\w*|ris\w*|fall\w*|fell|rose|drop\w*|"
    r"higher|lower|greater|lesser|smaller|larger|shift\w*|prolong\w*|shorten\w*|"
    r"widen\w*|narrow\w*|unchanged|no change|inversely|proportional|faster|slower|"
    r"more|fewer|less|augment\w*|diminish\w*|enhanc\w*|suppress\w*|impair\w*|"
    r"improv\w*|worsen\w*|blunt\w*|steeper|flatter|upward|downward)\b", re.I)

ABSOLUTE_RE = re.compile(r"\b(always|never|only|must|cannot|can not|completely|purely)\b", re.I)

NUMERIC_OPTION_RE = re.compile(
    r"^\s*(?:about|approximately|roughly|nearly|over|under|greater than|less than)?\s*"
    r"[-+]?\d[\d,]*(?:\.\d+)?\s*"
    r"(?:%|percent|mm\s*hg|mmhg|cm\s*h2o|ml(?:/min)?(?:/mm\s*hg)?|l(?:/min)?|"
    r"mg(?:/dl)?|mcg|g(?:/dl)?|meq/l|mmol/l|mosm(?:/kg)?|/min|bpm|kg|mm|cm|ms|mv|"
    r"sec(?:onds)?|min(?:utes)?|hours|days|weeks|months|years|fold|x|beats/min)?\s*$",
    re.I)

YEAR_RE = re.compile(r"\b(1[89]\d{2}|20[0-2]\d)\b")

# Banned lead-in / stem wording.
BANNED_LEADIN = [
    (re.compile(r"which statement is (correct|true|most accurate)", re.I), "'which statement is correct'"),
    (re.compile(r"\bmost accurate\b", re.I), "'most accurate'"),
    (re.compile(r"\bbest describes\b", re.I), "'best describes'"),
    (re.compile(r"which of the following is the best answer", re.I), "'best answer'"),
    (re.compile(r"\bEXCEPT\b"), "EXCEPT"),
    (re.compile(r"\bNOT\b"), "NOT (capitalized)"),
    (re.compile(r"\bLEAST\b"), "LEAST"),
    (re.compile(r"\bboth\s+\w+\s+and\b", re.I), "'both X and Y'"),
]

CLASSROOM_PHRASES = [
    "according to the lect", "the lecturer", "the lecture ", "in lecture", "in the lecture",
    "a medical student", "the student", "medical students", "the instructor", "the professor",
    "the attending", "the resident", "as discussed in class", "on the slide", "this deck",
    "the slide", "as taught",
]

EXPL_META_PHRASES = [
    "the lecture said", "the lecturer", "the distractor", "this case is constructed",
    "the strongest competitor", "according to the lecture", "the slide", "the deck",
    "this item", "the test writer",
]

# A Set B pivot must vary the patient, not the question.
B_BANNED_PIVOT = [
    (re.compile(r"if the question (had )?asked", re.I), "'if the question had asked'"),
    (re.compile(r"if the (stem|item|lead-in) (had )?asked", re.I), "'if the stem had asked'"),
    (re.compile(r"if .{0,40}were defined as", re.I), "counterfactual definition"),
    (re.compile(r"if we were asking", re.I), "'if we were asking'"),
]

# Set A must carry no vignette. "patient" alone is allowed (bare clinical noun).
VIGNETTE_RE = [
    (re.compile(r"\d+\s*-?\s*year[- ]old", re.I), "age"),
    (re.compile(r"\b(man|woman|boy|girl|gentleman|lady|infant|neonate|toddler)\b", re.I), "gender/age noun"),
    (re.compile(r"\bmm\s*hg\b", re.I), "vital sign"),
    (re.compile(r"\b(pulse|respirations|temperature|blood pressure) is\b", re.I), "vital sign"),
    (re.compile(r"\b\d+/min\b"), "vital sign"),
    (re.compile(r"\b(presents to|comes to|is brought to|was brought to)\b", re.I), "site of care"),
    (re.compile(r"\b(emergency department|urgent care|outpatient clinic|office visit)\b", re.I), "site of care"),
]

STANDALONE_RE = [
    (re.compile(r"\bthe same patient\b", re.I), "'the same patient'"),
    (re.compile(r"\bdescribed (earlier|above|previously)\b", re.I), "back-reference"),
    (re.compile(r"\b(previous|preceding|prior) question\b", re.I), "back-reference"),
    (re.compile(r"\bas (noted|stated) above\b", re.I), "back-reference"),
    (re.compile(r"\bin question \d+\b", re.I), "back-reference"),
]

MECHANISM_LEADIN_RE = re.compile(
    r"\b(mechanism|pathogenesis|cause of|causes? (his|her|the|this)|responsible for|"
    r"best explains|explanation for|why (does|is|did))\b", re.I)

ARITHMETIC_RE = re.compile(
    r"\b(calculate|compute|what is the (approximate )?(value|total|sum|difference)|"
    r"closest to|is equal to)\b", re.I)

COUNTING_CRITERIA_RE = re.compile(
    r"\b(how many|at least (one|two|three|four)\b.{0,30}\bof the (two|three|four|five))\b", re.I)

B_OPTION_CLAUSE_RE = re.compile(r"\b(so that|since|because|which|leading to|resulting in|thereby)\b", re.I)

REQUIRED_FIELDS = ["id", "category", "questionText", "options", "correctAnswerIndex",
                   "clinicalPearl", "lectureSource", "pdfLecture", "pdfPage", "pdfQuote"]

LETTERS = "ABCDE"


# ----------------------------------------------------------------------------
# Loading (bracket scanner from check_correct_index.py; tolerant of // headers)
# ----------------------------------------------------------------------------
ASSIGN_RE = re.compile(r'^\s*(?:window\.(\w+)|(?:const|let|var)\s+(\w+))\s*=\s*\[', re.MULTILINE)


def load_questions(path: Path):
    """Return (varname, questions). Raises ValueError with a readable message."""
    text = path.read_text(encoding="utf-8")
    m = ASSIGN_RE.search(text)
    if not m:
        raise ValueError("no `const X = [` or `window.X = [` assignment found")
    varname = m.group(1) or m.group(2)
    start = m.end() - 1
    depth, i, in_str, quote, end = 0, start, False, None, None
    while i < len(text):
        c = text[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == quote:
                in_str = False
        else:
            if c in '"\'':
                in_str, quote = True, c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
        i += 1
    if end is None:
        raise ValueError("unbalanced brackets in the array")
    try:
        arr = json.loads(text[start:end])
    except Exception as e:
        raise ValueError(f"array is not strict JSON: {e}")
    if not isinstance(arr, list):
        raise ValueError("assignment is not an array")
    if not re.search(r"window\.%s\s*=\s*%s\s*;" % (varname, varname), text) and not m.group(1):
        raise ValueError(f"`window.{varname} = {varname};` line is missing")
    return varname, arr


def load_pdf_mapping(repo: Path):
    p = repo / "scripts" / "pdf_mapping.js"
    if not p.exists():
        return None
    text = p.read_text(encoding="utf-8")
    return dict(re.findall(r'"([^"]+)"\s*:\s*"([^"]+)"', text))


# ----------------------------------------------------------------------------
# Small text helpers
# ----------------------------------------------------------------------------
def words(s: str) -> int:
    return len((s or "").split())


def norm(s: str) -> str:
    """Lowercase, ASCII-fold the common curly characters, collapse to words."""
    s = (s or "")
    for a, b in (("’", "'"), ("‘", "'"), ("“", '"'), ("”", '"'),
                 ("–", "-"), ("—", "-")):
        s = s.replace(a, b)
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def sentences(s: str):
    """Split on . ! ? but never between digits (37.2 C stays one sentence)."""
    parts = re.split(r"(?<!\d)[.!?]+(?=\s|$)", (s or "").strip())
    return [p for p in (x.strip() for x in parts) if p]


def body_sentences(expl: str):
    """Sentence count of an explanation, not counting the Correct./Incorrect. marker."""
    return len(sentences(re.sub(r"^\s*(In)?correct[.:]\s*", "", expl or "", flags=re.I)))


def content_words(text: str):
    toks = re.findall(r"[a-zA-Z][a-zA-Z\-]{3,}", (text or "").lower())
    return {t for t in toks if t not in STOPWORDS and t not in GENERIC}


def jaccard(a: set, b: set) -> float:
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def count_numbers(text: str) -> int:
    return len(re.findall(r"\d+(?:\.\d+)?", text or ""))


def is_numeric_option(text: str) -> bool:
    return bool(NUMERIC_OPTION_RE.match(text or ""))


def non_ascii(text: str):
    return sorted({c for c in (text or "") if ord(c) > 127})


def item_fields(q: dict):
    """Every string field of an item, for the ASCII / '<' sweeps."""
    out = [str(q.get("category", "")), str(q.get("questionText", "")),
           str(q.get("clinicalPearl", "")), str(q.get("lectureSource", "")),
           str(q.get("pdfLecture", "")), str(q.get("pdfQuote", ""))]
    for o in q.get("options", []) or []:
        if isinstance(o, dict):
            out.append(str(o.get("text", "")))
            out.append(str(o.get("explanation", "")))
    return out


def item_word_total(q: dict) -> int:
    return sum(words(f) for f in item_fields(q) if f) - words(str(q.get("category", ""))) \
        - words(str(q.get("lectureSource", ""))) - words(str(q.get("pdfLecture", ""))) \
        - words(str(q.get("pdfQuote", "")))


# ----------------------------------------------------------------------------
# Report plumbing
# ----------------------------------------------------------------------------
class Report:
    def __init__(self, title, max_ids=5, only_fails=False):
        self.title = title
        self.max_ids = max_ids
        self.only_fails = only_fails
        self.lines = []
        self.counts = Counter()
        self._section = None

    def section(self, name):
        self._section = name

    def check(self, name, ok, detail="", ids=(), level="FAIL"):
        status = "PASS" if ok else level
        self.counts[status] += 1
        if ok and self.only_fails:
            return
        self.lines.append((self._section, status, name, detail, list(ids)))

    def skip(self, name, why):
        """A check that cannot run (the field it audits is absent). Never a PASS."""
        if self.only_fails:
            return
        self.lines.append((self._section, "n/a ", name, why, []))

    def _fmt_ids(self, ids):
        if not ids:
            return ""
        ids = [(s[:30] + "..") if len(s := str(i)) > 32 else s for i in ids]
        shown = ids[: self.max_ids]
        extra = len(ids) - len(shown)
        tail = f" (+{extra} more)" if extra > 0 else ""
        return "ids " + ", ".join(shown) + tail

    def emit(self):
        print()
        print("=" * 100)
        print(self.title)
        print("=" * 100)
        last = object()
        for sec, status, name, detail, ids in self.lines:
            if sec != last:
                print(f"-- {sec} --")
                last = sec
            idstr = self._fmt_ids(ids)
            print(f"  [{status}] {name:<46} {detail:<30} {idstr}")
        print(f"  ---- {self.counts['PASS']} pass, {self.counts['WARN']} warn, "
              f"{self.counts['FAIL']} FAIL ----")


def rng(v, lo, hi):
    return lo <= v <= hi


# ----------------------------------------------------------------------------
# The file-level check run
# ----------------------------------------------------------------------------
def check_file(path: Path, setkey, questions, varname, mapping, rep: Report, base_id,
               named_by_file=True):
    spec = SPEC.get(setkey)
    n = len(questions)
    known = setkey in ("A", "B")
    lvl = "FAIL" if known else "WARN"   # unknown-type files never hard-fail set rules

    # ---------------- SCHEMA ----------------
    rep.section("SCHEMA")
    if spec:
        if setkey == "A":
            rep.check("item count (30; fewer only if the deck caps it)",
                      n == spec["items"], f"{n} vs 30",
                      level="FAIL" if n > spec["items"] else ("WARN" if n < spec["items"] else "FAIL"))
        else:
            rep.check("item count", n == spec["items"], f"{n} vs {spec['items']}")
    else:
        rep.check("item count", True, f"{n} (no set target)")

    if base_id and named_by_file:
        expect_var = f"Test_{base_id}_Recall" if setkey == "A" else (
            f"Test_{base_id}_Boards" if setkey == "B" else None)
        if expect_var:
            rep.check("const/window name matches file name", varname == expect_var,
                      f"{varname} vs {expect_var}")
    elif base_id:
        rep.skip("const/window name matches file name",
                 "legacy name, set inferred not declared")

    missing = defaultdict(list)
    for q in questions:
        qid = q.get("id", "?")
        for f in REQUIRED_FIELDS:
            if f not in q or q.get(f) in (None, ""):
                missing[f].append(qid)
    for f in REQUIRED_FIELDS:
        rep.check(f"field present: {f}", not missing[f],
                  f"{len(missing[f])} missing", missing[f])

    bad_ids = [i + 1 for i, q in enumerate(questions) if q.get("id") != i + 1]
    rep.check("ids sequential from 1", not bad_ids, f"{len(bad_ids)} off", bad_ids)

    bad_optcount = [q.get("id") for q in questions if len(q.get("options") or []) != 5]
    rep.check("exactly 5 options", not bad_optcount, f"{len(bad_optcount)} items", bad_optcount)

    bad_shape = [q.get("id") for q in questions
                 for o in (q.get("options") or [])
                 if not isinstance(o, dict) or "text" not in o or "explanation" not in o]
    rep.check("each option has {text, explanation}", not bad_shape,
              f"{len(set(bad_shape))} items", sorted(set(bad_shape)))

    # ---------------- ANSWER KEY ----------------
    rep.section("ANSWER KEY")
    no_marker, multi_marker, mismatch, oob = [], [], [], []
    for q in questions:
        opts = q.get("options") or []
        idx = q.get("correctAnswerIndex")
        marks = [i for i, o in enumerate(opts)
                 if isinstance(o, dict) and re.match(r"\s*Correct[.:]", o.get("explanation", "") or "")]
        if not isinstance(idx, int) or not (0 <= idx < len(opts)):
            oob.append(q.get("id"))
            continue
        if not marks:
            no_marker.append(q.get("id"))
        elif len(marks) > 1:
            multi_marker.append(q.get("id"))
        elif idx != marks[0]:
            mismatch.append(q.get("id"))
    rep.check("correctAnswerIndex in range 0-4", not oob, f"{len(oob)} items", oob)
    rep.check("exactly one 'Correct.' explanation", not no_marker and not multi_marker,
              f"{len(no_marker)} none / {len(multi_marker)} multi", no_marker + multi_marker)
    rep.check("index points at the 'Correct.' option", not mismatch,
              f"{len(mismatch)} mismatched", mismatch)

    bad_incorrect, no_pivot = [], []
    for q in questions:
        idx = q.get("correctAnswerIndex")
        for i, o in enumerate(q.get("options") or []):
            if not isinstance(o, dict) or i == idx:
                continue
            e = o.get("explanation", "") or ""
            if not e.strip().startswith("Incorrect."):
                bad_incorrect.append(q.get("id"))
            if "This would be the correct answer if" not in e:
                no_pivot.append(q.get("id"))
    rep.check("distractor explanations start 'Incorrect.'", not bad_incorrect,
              f"{len(set(bad_incorrect))} items", sorted(set(bad_incorrect)))
    rep.check("every distractor has the pivot sentence", not no_pivot,
              f"{len(set(no_pivot))} items", sorted(set(no_pivot)))

    bad_pearl = [q.get("id") for q in questions
                 if not str(q.get("clinicalPearl", "")).startswith("Key takeaway: ")]
    rep.check("clinicalPearl starts 'Key takeaway: '", not bad_pearl,
              f"{len(bad_pearl)} items", bad_pearl)

    # ---------------- TEXT RULES ----------------
    rep.section("TEXT")
    na_items, na_chars = [], set()
    lt_items = []
    for q in questions:
        for f in item_fields(q):
            bad = non_ascii(f)
            if bad:
                na_items.append(q.get("id"))
                na_chars.update(bad)
            if "<" in f:
                lt_items.append(q.get("id"))
    na_items, lt_items = sorted(set(na_items)), sorted(set(lt_items))
    sample = " ".join(sorted(na_chars)[:6])
    rep.check("plain ASCII only", not na_items,
              f"{len(na_items)} items [{sample}]", na_items)
    rep.check("no raw '<' character", not lt_items, f"{len(lt_items)} items", lt_items)

    src = {str(q.get("lectureSource", "")) for q in questions if q.get("lectureSource")}
    if not src:
        rep.skip("lectureSource constant / format", "field absent on every item")
    else:
        rep.check("lectureSource constant across file", len(src) <= 1,
                  f"{len(src)} distinct", level=lvl)
        bad_src = [s for s in src if not re.match(r"^[A-Za-z0-9_]+:\s+\S", s)]
        rep.check("lectureSource format 'XXX: Lecture Title'", not bad_src,
                  f"{len(bad_src)} bad", level=lvl)

    lects = {str(q.get("pdfLecture", "")) for q in questions if q.get("pdfLecture")}
    if not lects:
        rep.skip("pdfLecture constant / mapped", "field absent on every item")
    else:
        rep.check("pdfLecture constant across file", len(lects) <= 1,
                  f"{len(lects)} distinct", level=lvl)
        if mapping is not None:
            unmapped = sorted(k for k in lects if k not in mapping)
            rep.check("pdfLecture key exists in pdf_mapping.js", not unmapped,
                      f"{len(unmapped)} unmapped: {', '.join(unmapped[:3])}")
        if base_id and known:
            rep.check("pdfLecture matches the file's lecture id", lects == {base_id},
                      f"{sorted(lects)} vs {base_id}")

    badpage = [q.get("id") for q in questions
               if not isinstance(q.get("pdfPage"), int) or q.get("pdfPage", 0) < 1]
    rep.check("pdfPage is a positive integer", not badpage, f"{len(badpage)} items", badpage)
    badquote = [q.get("id") for q in questions
                if not (2 <= words(str(q.get("pdfQuote", ""))) <= 10)]
    rep.check("pdfQuote is 2-10 words", not badquote, f"{len(badquote)} items", badquote)
    sub_quote = [q.get("id") for q in questions
                 if re.search(r"[A-Za-z]\s?\d\b", str(q.get("pdfQuote", "")))]
    rep.check("pdfQuote avoids sub/superscript spans (heuristic)", not sub_quote,
              f"{len(sub_quote)} items", sub_quote, level="WARN")

    if not spec:
        return  # unknown set: shared checks only

    # ---------------- ANSWER BALANCE ----------------
    rep.section("ANSWER BALANCE")
    seq = [q.get("correctAnswerIndex") for q in questions
           if isinstance(q.get("correctAnswerIndex"), int)]
    dist = Counter(seq)
    # A Set A capped below 30 by a thin deck (min(30, 2 x content slides)) scales
    # every quota to its real size: n/5 keys per letter, length tells at ~13-27%.
    n_keys = len(seq)
    scaled = setkey == "A" and n_keys < spec["items"]
    target = n_keys // 5 if scaled else spec["keys_per_letter"]
    spread = "/".join(str(dist.get(i, 0)) for i in range(5))
    if scaled and n_keys % 5:
        ok_keys = max(dist.get(i, 0) for i in range(5)) - min(dist.get(i, 0) for i in range(5)) <= 1
        want = f"within 1 of {n_keys / 5:.1f}"
    else:
        ok_keys = all(dist.get(i, 0) == target for i in range(5))
        want = "/".join([str(target)] * 5)
    rep.check("keys per letter A-E", ok_keys, f"{spread} vs {want}")

    runs = [questions[i].get("id") for i in range(2, len(seq))
            if seq[i] == seq[i - 1] == seq[i - 2]]
    rep.check("no letter keyed 3x in a row", not runs, f"{len(runs)} runs", runs)

    cyc = []
    for p in range(2, 6):
        run = 0
        for i in range(p, len(seq)):
            run = run + 1 if seq[i] == seq[i - p] else 0
            if run >= 8:
                cyc.append(f"period {p}")
                break
    rep.check("no repeating key cycle", not cyc, ", ".join(cyc) or "none")

    longest, shortest = [], []
    for q in questions:
        opts = q.get("options") or []
        idx = q.get("correctAnswerIndex")
        if not isinstance(idx, int) or not (0 <= idx < len(opts)) or len(opts) < 2:
            continue
        lens = [len(o.get("text", "")) for o in opts]
        others = lens[:idx] + lens[idx + 1:]
        if lens[idx] > max(others):
            longest.append(q.get("id"))
        if lens[idx] < min(others):
            shortest.append(q.get("id"))
    def length_range(key):
        lo, hi = spec[key]
        if scaled:
            lo, hi = (max(1, round(x * n_keys / spec["items"])) for x in (lo, hi))
        return lo, hi
    lo, hi = length_range("longest_range")
    rep.check("key strictly LONGEST count", rng(len(longest), lo, hi),
              f"{len(longest)} vs {lo}-{hi}", longest)
    lo, hi = length_range("shortest_range")
    rep.check("key strictly SHORTEST count", rng(len(shortest), lo, hi),
              f"{len(shortest)} vs {lo}-{hi}", shortest)

    echo_thresh = ECHO_UNIQUE_A if setkey == "A" else ECHO_UNIQUE_B
    echoed = []
    for q in questions:
        opts = q.get("options") or []
        idx = q.get("correctAnswerIndex")
        if not isinstance(idx, int) or not (0 <= idx < len(opts)):
            continue
        stem_w = content_words(q.get("questionText", ""))
        ow = [content_words(o.get("text", "")) for o in opts]
        distr = set().union(*[ow[i] for i in range(len(opts)) if i != idx]) if len(opts) > 1 else set()
        uniq = (stem_w & ow[idx]) - distr
        if len(uniq) >= echo_thresh:
            echoed.append(q.get("id"))
    rep.check(f"key does not echo {echo_thresh}+ stem words alone", not echoed,
              f"{len(echoed)} items", echoed)

    conv = []
    for q in questions:
        opts = q.get("options") or []
        idx = q.get("correctAnswerIndex")
        if not isinstance(idx, int) or len(opts) != 5:
            continue
        ow = [content_words(o.get("text", "")) for o in opts]
        share = [sum(len(ow[i] & ow[j]) for j in range(5) if j != i) for i in range(5)]
        if share[idx] > 0 and share[idx] > max(share[:idx] + share[idx + 1:]):
            conv.append(q.get("id"))
    rep.check("no convergence (key not the most-shared option)", not conv,
              f"{len(conv)} items", conv, level="WARN")

    # ---------------- WORD BUDGET ----------------
    rep.section("WORD BUDGET")
    over_stem = [(q.get("id"), words(q.get("questionText", ""))) for q in questions
                 if words(q.get("questionText", "")) > spec["stem_words"]]
    rep.check(f"stem <= {spec['stem_words']} words", not over_stem,
              f"{len(over_stem)} over, max {max([w for _, w in over_stem], default=0)}",
              [i for i, _ in over_stem])

    over_opt, exempt = [], 0
    for q in questions:
        for o in q.get("options") or []:
            t = o.get("text", "") if isinstance(o, dict) else ""
            if setkey == "B" and t.count(",") >= 2 and count_numbers(t) >= 2:
                exempt += 1          # findings set (ABG / electrolyte pattern)
                continue
            if words(t) > spec["option_words"]:
                over_opt.append(q.get("id"))
    over_opt = sorted(set(over_opt))
    rep.check(f"option <= {spec['option_words']} words",
              not over_opt, f"{len(over_opt)} items ({exempt} findings-set exempt)", over_opt)

    over_ce, over_ie, over_pearl, over_item, sent_ce = [], [], [], [], []
    for q in questions:
        idx = q.get("correctAnswerIndex")
        for i, o in enumerate(q.get("options") or []):
            if not isinstance(o, dict):
                continue
            e = o.get("explanation", "") or ""
            if i == idx:
                if words(e) > spec["correct_expl_words"]:
                    over_ce.append(q.get("id"))
                ns = body_sentences(e)
                if setkey == "A" and ns > spec["correct_expl_sentences"]:
                    sent_ce.append(q.get("id"))
                if setkey == "B" and not (3 <= ns <= 4):
                    sent_ce.append(q.get("id"))
            elif words(e) > spec["incorrect_expl_words"]:
                over_ie.append(q.get("id"))
        if words(str(q.get("clinicalPearl", ""))) > spec["pearl_words"]:
            over_pearl.append(q.get("id"))
        if item_word_total(q) > spec["item_words"]:
            over_item.append(q.get("id"))
    rep.check(f"correct explanation <= {spec['correct_expl_words']} words", not over_ce,
              f"{len(set(over_ce))} items", sorted(set(over_ce)))
    rep.check(f"each incorrect explanation <= {spec['incorrect_expl_words']} words", not over_ie,
              f"{len(set(over_ie))} items", sorted(set(over_ie)))
    want = "<= 2 sentences" if setkey == "A" else "3-4 sentences"
    rep.check(f"correct explanation {want} (heuristic)", not sent_ce,
              f"{len(set(sent_ce))} items", sorted(set(sent_ce)), level="WARN")
    rep.check(f"clinicalPearl <= {spec['pearl_words']} words", not over_pearl,
              f"{len(over_pearl)} items", over_pearl)
    rep.check(f"whole item <= {spec['item_words']} words", not over_item,
              f"{len(over_item)} items", over_item)

    # ---------------- OPTION FORM ----------------
    rep.section("OPTION FORM")
    abs_items, aotb, dup_in_item, opp_pairs, exhaustive, year_items = [], [], [], [], [], []
    period_items, cap_items, clause_items, punct_items = [], [], [], []
    for q in questions:
        texts = [o.get("text", "") for o in (q.get("options") or []) if isinstance(o, dict)]
        if any(ABSOLUTE_RE.search(t) for t in texts):
            abs_items.append(q.get("id"))
        if any(re.match(r"\s*(none|all) of the above", t, re.I) for t in texts):
            aotb.append(q.get("id"))
        nm = [norm(t) for t in texts]
        if len(set(nm)) != len(nm):
            dup_in_item.append(q.get("id"))
        if any(YEAR_RE.search(t) for t in texts):
            year_items.append(q.get("id"))
        if any(t.rstrip().endswith(".") for t in texts):
            period_items.append(q.get("id"))
        if any(t[:1].islower() for t in texts if t):
            cap_items.append(q.get("id"))
        if setkey == "B":
            if any(B_OPTION_CLAUSE_RE.search(t) for t in texts):
                clause_items.append(q.get("id"))
            if any(("(" in t or ";" in t) for t in texts):
                punct_items.append(q.get("id"))
        # opposite pairs / exhaustive triples
        stems_by_root = defaultdict(set)
        for t in texts:
            m = re.match(r"\s*(increas\w*|decreas\w*|elevat\w*|reduc\w*|higher|lower|"
                         r"no change|unchanged)\b(.*)$", t, re.I)
            if m:
                stems_by_root[norm(m.group(2))].add(m.group(1).lower())
        for rest, roots in stems_by_root.items():
            ups = {r for r in roots if r.startswith(("increas", "elevat", "higher"))}
            downs = {r for r in roots if r.startswith(("decreas", "reduc", "lower"))}
            flat = {r for r in roots if r in ("no change", "unchanged")}
            if ups and downs:
                opp_pairs.append(q.get("id"))
                if flat:
                    exhaustive.append(q.get("id"))
    for nm2, ids, lv in [
        ("no absolute terms in any option", abs_items, "FAIL"),
        ("no 'None/All of the above'", aotb, "FAIL"),
        ("no two identical options in one item", dup_in_item, "FAIL"),
        ("no years in options", year_items, "FAIL"),
        ("no opposite pairs", sorted(set(opp_pairs)), "FAIL"),
        ("no exhaustive Up/Down/No-change triples", sorted(set(exhaustive)), "FAIL"),
        ("options carry no final period", period_items, "FAIL" if setkey == "B" else "WARN"),
        ("options are capitalized", cap_items, "FAIL" if setkey == "B" else "WARN"),
    ]:
        ids = sorted(set(ids))
        rep.check(nm2, not ids, f"{len(ids)} items", ids, level=lv)
    if setkey == "B":
        clause_items, punct_items = sorted(set(clause_items)), sorted(set(punct_items))
        rep.check("options have no so/since/because/which clause", not clause_items,
                  f"{len(clause_items)} items", clause_items)
        rep.check("options have no parentheses or semicolons", not punct_items,
                  f"{len(punct_items)} items", punct_items)

    # ---------------- NUMERIC LOAD ----------------
    rep.section("NUMERIC LOAD")
    stems3, numkeys, allnum, dirkeys, arith, counting = [], [], [], [], [], []
    for q in questions:
        stem = q.get("questionText", "") or ""
        opts = q.get("options") or []
        idx = q.get("correctAnswerIndex")
        texts = [o.get("text", "") for o in opts if isinstance(o, dict)]
        if count_numbers(stem) >= 3:
            stems3.append(q.get("id"))
        if isinstance(idx, int) and 0 <= idx < len(texts):
            if is_numeric_option(texts[idx]):
                numkeys.append(q.get("id"))
            if DIRECTION_RE.search(texts[idx]):
                dirkeys.append(q.get("id"))
        if texts and all(is_numeric_option(t) for t in texts):
            allnum.append(q.get("id"))
            if count_numbers(stem) >= 2 or ARITHMETIC_RE.search(stem):
                arith.append(q.get("id"))
        elif ARITHMETIC_RE.search(stem):
            arith.append(q.get("id"))
        if COUNTING_CRITERIA_RE.search(stem):
            counting.append(q.get("id"))
    rep.check(f"stems with 3+ numbers (max {spec['max_stems_3plus_numbers']})",
              len(stems3) <= spec["max_stems_3plus_numbers"],
              f"{len(stems3)} vs max {spec['max_stems_3plus_numbers']}", stems3)
    rep.check(f"items keyed on an exact number (max {spec['max_numeric_keys']})",
              len(numkeys) <= spec["max_numeric_keys"],
              f"{len(numkeys)} vs max {spec['max_numeric_keys']}", numkeys)
    rep.check(f"all-numeric option sets (max {spec['max_all_numeric_option_sets']})",
              len(allnum) <= spec["max_all_numeric_option_sets"],
              f"{len(allnum)} vs max {spec['max_all_numeric_option_sets']}", allnum)
    rep.check(f"items needing arithmetic (max {spec['max_arithmetic']}) (heuristic)",
              len(arith) <= spec["max_arithmetic"],
              f"{len(arith)} vs max {spec['max_arithmetic']}", sorted(set(arith)), level="WARN")
    min_dir = spec["min_direction_keys"]
    if setkey == "A" and n < spec["items"]:   # capped Set A: same 40% share
        min_dir = round(min_dir * n / spec["items"])
    rep.check(f"direction/relationship keys (min {min_dir})",
              len(dirkeys) >= min_dir,
              f"{len(dirkeys)} of {n} vs min {min_dir}")
    rep.check("no counting-the-criteria items", not counting,
              f"{len(counting)} items", counting)
    if allnum:
        unsorted_ids = []
        for q in questions:
            if q.get("id") not in allnum:
                continue
            vals = []
            for o in q.get("options") or []:
                m = re.search(r"[-+]?\d[\d,]*(?:\.\d+)?", o.get("text", ""))
                vals.append(float(m.group(0).replace(",", "")) if m else None)
            if None not in vals and vals != sorted(vals):
                unsorted_ids.append(q.get("id"))
        rep.check("numeric options in ascending order", not unsorted_ids,
                  f"{len(unsorted_ids)} items", unsorted_ids)

    # ---------------- STEM RULES ----------------
    rep.section("STEM RULES")
    banned_hits = defaultdict(list)
    no_qmark, colon_end, two_q, notstandalone, classroom = [], [], [], [], []
    for q in questions:
        stem = (q.get("questionText", "") or "").strip()
        for rx, label in BANNED_LEADIN:
            if rx.search(stem):
                banned_hits[label].append(q.get("id"))
        if not stem.endswith("?"):
            no_qmark.append(q.get("id"))
        if stem.endswith(":"):
            colon_end.append(q.get("id"))
        if stem.count("?") > 1:
            two_q.append(q.get("id"))
        for rx, _ in STANDALONE_RE:
            if rx.search(stem):
                notstandalone.append(q.get("id"))
                break
        low = stem.lower()
        if any(p in low for p in CLASSROOM_PHRASES):
            classroom.append(q.get("id"))
    labels = ", ".join(f"{k}x{len(v)}" for k, v in banned_hits.items())
    allb = sorted({i for v in banned_hits.values() for i in v})
    rep.check("no banned lead-in wording", not allb, labels or "none", allb)
    rep.check("stem ends with '?'", not no_qmark, f"{len(no_qmark)} items", no_qmark,
              level="FAIL" if setkey == "B" else "WARN")
    rep.check("no incomplete stem ending in ':'", not colon_end, f"{len(colon_end)} items", colon_end)
    rep.check("one question per stem", not two_q, f"{len(two_q)} items", two_q)
    rep.check("stems are standalone", not notstandalone,
              f"{len(notstandalone)} items", notstandalone)
    rep.check("no classroom/source framing in stems", not classroom,
              f"{len(classroom)} items", classroom)

    meta = []
    for q in questions:
        for o in q.get("options") or []:
            e = (o.get("explanation", "") if isinstance(o, dict) else "").lower()
            if any(p in e for p in EXPL_META_PHRASES):
                meta.append(q.get("id"))
                break
    rep.check("explanations explain medicine, not the item", not meta,
              f"{len(meta)} items", meta)

    if setkey == "A":
        vig = defaultdict(list)
        for q in questions:
            stem = q.get("questionText", "") or ""
            for rx, label in VIGNETTE_RE:
                if rx.search(stem):
                    vig[label].append(q.get("id"))
        allv = sorted({i for v in vig.values() for i in v})
        rep.check("no patient vignette (Set A)", not allv,
                  ", ".join(f"{k}x{len(v)}" for k, v in vig.items()) or "none", allv)
        wotf = [q.get("id") for q in questions
                if (q.get("questionText", "") or "").lower().startswith("which of the following")]
        rep.check("'Which of the following' stems reserved (heuristic)",
                  len(wotf) <= n // 3, f"{len(wotf)} of {n} open with it", wotf, level="WARN")
        pivot_asked = sum(1 for q in questions for o in (q.get("options") or [])
                          if "if the question had asked" in (o.get("explanation", "") or "").lower())
        rep.check("Set A pivot uses the 'had asked' form (preferred)", True,
                  f"{pivot_asked} distractor pivots", level="WARN")
    else:
        bad_pivot = defaultdict(list)
        for q in questions:
            idx = q.get("correctAnswerIndex")
            for i, o in enumerate(q.get("options") or []):
                if i == idx or not isinstance(o, dict):
                    continue
                e = o.get("explanation", "") or ""
                for rx, label in B_BANNED_PIVOT:
                    if rx.search(e):
                        bad_pivot[label].append(q.get("id"))
        allp = sorted({i for v in bad_pivot.values() for i in v})
        rep.check("Set B pivot varies the patient, not the question", not allp,
                  ", ".join(f"{k}x{len(set(v))}" for k, v in bad_pivot.items()) or "none", allp)

        mech = [q.get("id") for q in questions
                if MECHANISM_LEADIN_RE.search(sentences(q.get("questionText", ""))[-1]
                                              if sentences(q.get("questionText", "")) else "")]
        rep.check(f"mechanism/cause lead-ins (max {spec['max_mechanism_leadins']})",
                  len(mech) <= spec["max_mechanism_leadins"],
                  f"{len(mech)} vs max {spec['max_mechanism_leadins']}", mech)

        data_only = []
        for q in questions:
            head = " ".join((q.get("questionText", "") or "").split()[:14]).lower()
            if not re.search(r"year[- ]old|\b(man|woman|boy|girl|patient|infant|neonate)\b", head):
                data_only.append(q.get("id"))
        rep.check(f"data-only scenarios (max {spec['max_data_only']})",
                  len(data_only) <= spec["max_data_only"],
                  f"{len(data_only)} vs max {spec['max_data_only']}", data_only)

    # ---------------- COVERAGE (Set A) ----------------
    if setkey == "A":
        rep.section("COVERAGE IN ORDER")
        pages = [(q.get("id"), q.get("pdfPage")) for q in questions
                 if isinstance(q.get("pdfPage"), int)]
        drops = [qid for (qid, p), (_, prev) in zip(pages[1:], pages[:-1]) if p < prev]
        rep.check("pdfPage non-decreasing across ids", not drops,
                  f"{len(drops)} drops", drops)
        per_page = Counter(p for _, p in pages)
        over2 = [p for p, c in per_page.items() if c > 2]
        rep.check("at most 2 items per slide", not over2,
                  f"{len(over2)} slides: {over2[:5]}")
        uniq_pages = sorted(per_page)
        gaps = []
        for a, b in zip(uniq_pages, uniq_pages[1:]):
            if b - a > 4:
                gaps.append(f"{a}->{b}")
        rep.check("no run of >3 slides without an item (heuristic)", not gaps,
                  f"{len(gaps)} gaps: {', '.join(gaps[:4])}", level="WARN")
        rep.check("slide span covered", bool(uniq_pages),
                  f"pages {uniq_pages[0] if uniq_pages else '?'}-"
                  f"{uniq_pages[-1] if uniq_pages else '?'} over {len(uniq_pages)} slides")

    # ---------------- CATEGORY ----------------
    rep.section("CATEGORY")
    cats = [str(q.get("category", "")) for q in questions]
    uniq = sorted(set(cats))
    lo, hi = spec["categories"]
    rep.check(f"distinct categories ({lo}-{hi})", rng(len(uniq), lo, hi),
              f"{len(uniq)} vs {lo}-{hi}")
    badfmt = [q.get("id") for q in questions
              if not re.match(r"^[^:]+:\s+\S", str(q.get("category", "")))]
    rep.check(f"category format '{spec['cat_format']}'", not badfmt,
              f"{len(badfmt)} items", badfmt)

    # ---------------- DUPLICATE ITEMS (within file) ----------------
    rep.section("DUPLICATES (within file)")
    optmap = defaultdict(set)
    for q in questions:
        for o in q.get("options") or []:
            if isinstance(o, dict) and o.get("text"):
                optmap[norm(o["text"])].add(q.get("id"))
    shared = {k: v for k, v in optmap.items() if len(v) > 1}
    rep.check("no option string reused across items", not shared,
              f"{len(shared)} strings",
              [f"{sorted(v)}" for v in list(shared.values())[:5]])
    pair_counts = Counter()
    for k, v in shared.items():
        v = sorted(v)
        for i in range(len(v)):
            for j in range(i + 1, len(v)):
                pair_counts[(v[i], v[j])] += 1
    three = [f"{a}&{b}" for (a, b), c in pair_counts.items() if c >= 3]
    rep.check("no two items share 3+ options", not three, f"{len(three)} pairs", three)

    stems = [(q.get("id"), content_words(q.get("questionText", ""))) for q in questions]
    dups = []
    for i in range(len(stems)):
        for j in range(i + 1, len(stems)):
            if jaccard(stems[i][1], stems[j][1]) >= DUP_STEM_JACCARD:
                dups.append(f"{stems[i][0]}&{stems[j][0]}")
    rep.check(f"no near-duplicate stems (Jaccard >= {DUP_STEM_JACCARD})", not dups,
              f"{len(dups)} pairs", dups)

    # ---------------- TIMING ----------------
    rep.section("TIMING")
    ans_sec = 0.0
    read_words = 0
    for q in questions:
        stem_w = words(q.get("questionText", ""))
        opt_w = sum(words(o.get("text", "")) for o in (q.get("options") or [])
                    if isinstance(o, dict))
        ans_sec += (stem_w + opt_w) / READ_WPS + spec["answer_overhead_sec"]
        read_words += item_word_total(q)
    per_item = ans_sec / n if n else 0
    ans_min = ans_sec / 60
    read_min = read_words / READ_WPS / 60
    want_sec = "15-20 s" if setkey == "A" else "30-35 s"
    ok_pi = (12 <= per_item <= 24) if setkey == "A" else (25 <= per_item <= 45)
    rep.check(f"estimated seconds per item (target {want_sec})", ok_pi,
              f"{per_item:.0f} s/item", level="WARN")
    rep.check(f"set answers in <= {spec['answer_minutes']} min",
              ans_min <= spec["answer_minutes"],
              f"{ans_min:.1f} min vs {spec['answer_minutes']}")
    rep.check(f"set reads through once in <= {spec['read_minutes']} min",
              read_min <= spec["read_minutes"],
              f"{read_min:.1f} min vs {spec['read_minutes']}")


# ----------------------------------------------------------------------------
# Cross-file audit for a Recall/Boards pair
# ----------------------------------------------------------------------------
def check_pair(base_id, a_path, a_qs, b_path, b_qs, max_ids, only_fails):
    rep = Report(f"PAIR AUDIT  {base_id}   {a_path.name}  +  {b_path.name}",
                 max_ids=max_ids, only_fails=only_fails)
    rep.section("NO LEAKAGE")
    amap, bmap = defaultdict(list), defaultdict(list)
    for tag, qs, m in (("A", a_qs, amap), ("B", b_qs, bmap)):
        for q in qs:
            for o in q.get("options") or []:
                if isinstance(o, dict) and o.get("text"):
                    m[norm(o["text"])].append(f"{tag}{q.get('id')}")
    shared = sorted(set(amap) & set(bmap))
    hits = sorted({f"{amap[k][0]}={bmap[k][0]}" for k in shared})
    rep.check("no option string appears in both files", not shared,
              f"{len(shared)} strings", hits)

    pair_counts = Counter()
    for k in shared:
        for a in amap[k]:
            for b in bmap[k]:
                pair_counts[(a, b)] += 1
    three = [f"{a}&{b}" for (a, b), c in pair_counts.items() if c >= 3]
    rep.check("no cross-file item pair shares 3+ options", not three,
              f"{len(three)} pairs", three)

    rep.section("SET B IS NOT A RESTATED SET A")
    aw = [(q.get("id"), content_words(q.get("questionText", "")),
           norm((q.get("options") or [{}])[q.get("correctAnswerIndex", 0)].get("text", ""))
           if isinstance(q.get("correctAnswerIndex"), int) else "") for q in a_qs]
    restated, samekey = [], []
    for q in b_qs:
        bw = content_words(q.get("questionText", ""))
        idx = q.get("correctAnswerIndex")
        bkey = norm((q.get("options") or [{}])[idx].get("text", "")) if isinstance(idx, int) else ""
        for aid, awords, akey in aw:
            if jaccard(bw, awords) >= 0.45:
                restated.append(f"B{q.get('id')}~A{aid}")
            elif bkey and bkey == akey and jaccard(bw, awords) >= 0.25:
                samekey.append(f"B{q.get('id')}~A{aid}")
    rep.check("no Set B stem restates a Set A stem", not restated,
              f"{len(restated)} pairs", restated)
    rep.check("no Set B item shares a key with a similar Set A item", not samekey,
              f"{len(samekey)} pairs", samekey, level="WARN")

    rep.section("PAIR CONSISTENCY")
    asrc = {str(q.get("lectureSource", "")) for q in a_qs if q.get("lectureSource")}
    bsrc = {str(q.get("lectureSource", "")) for q in b_qs if q.get("lectureSource")}
    if not asrc and not bsrc:
        rep.skip("both files name the same lecture", "lectureSource absent in both")
    else:
        rep.check("both files name the same lecture", asrc == bsrc,
                  f"{sorted(asrc)[:1]} vs {sorted(bsrc)[:1]}")
    acat = {str(q.get("category", "")) for q in a_qs}
    bcat = {str(q.get("category", "")) for q in b_qs}
    rep.check("Set B categories are its own (System: Topic)", not (acat & bcat),
              f"{len(acat & bcat)} shared", sorted(acat & bcat), level="WARN")
    rep.emit()
    return rep


# ----------------------------------------------------------------------------
def detect_set(path: Path, forced, n):
    name = path.name
    m = re.match(r"Test_(.+?)_Recall\.js$", name)
    if m:
        return "A", m.group(1), "filename"
    m = re.match(r"Test_(.+?)_Boards\.js$", name)
    if m:
        return "B", m.group(1), "filename"
    m = re.match(r"Test_(.+?)\.js$", name)
    base = m.group(1) if m else None
    if forced:
        return forced.upper(), base, "--set flag"
    if n == 30:
        return "A", base, "inferred from 30 items"
    if n == 15:
        return "B", base, "inferred from 15 items"
    return "?", base, "unknown - shared checks only"


def main():
    ap = argparse.ArgumentParser(
        description="Check Test_*.js question files against the v6 two-set prompt.")
    ap.add_argument("files", nargs="+", help="one or more Test_*.js paths")
    ap.add_argument("--set", choices=["a", "b"], default=None,
                    help="force the set type when the filename does not say")
    ap.add_argument("--repo", default=None,
                    help="repo root for pdf_mapping.js (default: the file's own folder)")
    ap.add_argument("--max-ids", type=int, default=5, help="item ids shown per line (default 5)")
    ap.add_argument("--only-fails", action="store_true", help="hide PASS lines")
    ap.add_argument("--quiet", action="store_true", help="one summary line per file")
    ap.add_argument("--strict", action="store_true", help="exit 2 if any WARN")
    args = ap.parse_args()

    paths = [Path(f) for f in args.files]
    repo = Path(args.repo) if args.repo else (paths[0].resolve().parent
                                              if paths[0].resolve().parent.name != "scripts"
                                              else paths[0].resolve().parent.parent)
    mapping = load_pdf_mapping(repo)

    loaded, totals = {}, Counter()
    reports = []
    for p in paths:
        if not p.exists():
            print(f"MISSING: {p}")
            totals["FAIL"] += 1
            continue
        try:
            varname, qs = load_questions(p)
        except ValueError as e:
            print(f"\n{'=' * 100}\n{p.name}\n{'=' * 100}\n  [FAIL] parse: {e}")
            totals["FAIL"] += 1
            continue
        setkey, base_id, how = detect_set(p, args.set, len(qs))
        title = (f"{p.name}   set={setkey} {SPEC[setkey]['label'] if setkey in SPEC else '(unknown)'}"
                 f"   [{how}]   const {varname}   items={len(qs)}")
        rep = Report(title, max_ids=args.max_ids, only_fails=args.only_fails)
        check_file(p, setkey, qs, varname, mapping, rep, base_id,
                   named_by_file=(how == "filename"))
        if not args.quiet:
            rep.emit()
        else:
            print(f"{p.name:<34} set={setkey} n={len(qs):<3} "
                  f"pass={rep.counts['PASS']:<3} warn={rep.counts['WARN']:<3} "
                  f"FAIL={rep.counts['FAIL']}")
        totals.update(rep.counts)
        reports.append((p, setkey, base_id, qs))
        loaded[p.name] = (setkey, base_id, qs)

    by_base = defaultdict(dict)
    for p, setkey, base_id, qs in reports:
        if setkey in ("A", "B") and base_id:
            by_base[base_id][setkey] = (p, qs)
    for base_id, d in sorted(by_base.items()):
        if "A" in d and "B" in d:
            r = check_pair(base_id, d["A"][0], d["A"][1], d["B"][0], d["B"][1],
                           args.max_ids, args.only_fails)
            totals.update(r.counts)

    print()
    print("=" * 100)
    print(f"TOTAL: {totals['PASS']} pass, {totals['WARN']} warn, {totals['FAIL']} FAIL "
          f"across {len(reports)} file(s)")
    print("=" * 100)
    if totals["FAIL"]:
        return 1
    if args.strict and totals["WARN"]:
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())

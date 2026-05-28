"""Detect answer-giveaway patterns in Section IV (Weeks 17-20) exams.

Two independent giveaway axes are measured per question:

1. LENGTH  — the correct option is the longest / much longer than the rest.
   A test-taker can pick the long answer without knowing the material.
       strict_longest : correct is strictly the longest option
       margin         : len(correct) - len(next_longest_distractor)

2. LEXICAL ECHO — the correct option repeats distinctive words taken
   straight from the stem, while distractors do not. A test-taker can
   word-match the stem to the answer.
       echo_unique    : count of distinctive stem words that appear in the
                        correct option but in NO distractor (strongest signal)
       echo_margin    : (#distinctive stem words in correct) minus the max
                        over distractors

Run:  python scripts/analyze_giveaways.py [--week 17 18 19 20] [--verbose]
"""
import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

WEEK_FILES = {
    17: [
        "Test_L149.js", "Test_L150.js", "Test_L151.js", "Test_L151_Part2.js",
        "Test_L152.js", "Test_L152_Part2.js", "Test_L153.js", "Test_L154.js",
        "Test_L154_Part2.js", "Test_L155.js", "Test_L155_Part2.js", "Test_L156.js",
        "Test_L157.js", "Test_L158.js", "Test_L159.js", "Test_Cumulative_Week17.js",
    ],
    18: [
        "Test_L161.js", "Test_L162.js", "Test_L163.js", "Test_L164.js", "Test_L165.js",
        "Test_L166.js", "Test_L166_Part2.js", "Test_L167.js", "Test_L168.js",
        "Test_L169.js", "Test_L170.js", "Test_Cumulative_Week18.js",
    ],
    19: [
        "Test_L172.js", "Test_L173.js", "Test_L174.js", "Test_L175.js", "Test_L176.js",
        "Test_L177.js", "Test_L178.js", "Test_L179.js", "Test_L180.js", "Test_L181.js",
        "Test_L182.js", "Test_Cumulative_Week19.js",
    ],
    20: [
        "Test_L184.js", "Test_L185.js", "Test_L186.js", "Test_L187.js", "Test_L188.js",
        "Test_L189.js", "Test_L190.js", "Test_L191.js", "Test_L192.js",
    ],
}

# Thresholds for flagging.
MARGIN_THRESHOLD = 40        # correct longer than next by >= this many chars
ECHO_UNIQUE_THRESHOLD = 3    # >= this many stem words echoed ONLY by correct
ECHO_MARGIN_THRESHOLD = 4    # correct echoes >= this many more stem words than best distractor

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

# Generic medical filler words that appear in nearly every option/stem and so
# carry little discriminative signal — excluded from "distinctive" echo.
GENERIC = set("""
patient woman man male female year years old presents history shows reveals reveal
exam examination findings finding likely most cause causes caused diagnosis diagnose
treatment treat treated therapy drug drugs agent agents class mechanism action effect
effects increased decreased increase decrease elevated reduced level levels blood cell
cells disease disorder syndrome condition lecturer states emphasizes describes asks
question following which best initial next step management clinical because would
correct answer option stage form type primary secondary acute chronic without with
""".split())


def load_questions(path: Path):
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    while lines and (lines[0].strip().startswith("//") or not lines[0].strip()):
        lines.pop(0)
    text = "\n".join(lines)
    m = re.match(
        r"^(?:window\.|const\s+|var\s+|let\s+)\w+\s*=\s*(\[.*?\])\s*;\s*(?:window\.\w+\s*=\s*\w+\s*;?\s*)?$",
        text, re.DOTALL)
    if not m:
        raise SystemExit(f"Could not parse {path.name}")
    return json.loads(m.group(1))


def content_words(text: str):
    """Distinctive content tokens: lowercased, >=4 chars, not stop/generic."""
    toks = re.findall(r"[a-zA-Z][a-zA-Z\-]{3,}", text.lower())
    return {t for t in toks if t not in STOPWORDS and t not in GENERIC}


def analyze_question(q):
    opts = q["options"]
    idx = q["correctAnswerIndex"]
    texts = [o["text"] for o in opts]

    # --- length axis ---
    lens = [len(t) for t in texts]
    correct_len = lens[idx]
    other_lens = lens[:idx] + lens[idx + 1:]
    next_longest = max(other_lens)
    margin = correct_len - next_longest
    strict_longest = correct_len > next_longest

    # --- lexical echo axis ---
    stem_words = content_words(q["questionText"])
    opt_words = [content_words(t) for t in texts]
    correct_overlap = stem_words & opt_words[idx]
    distractor_word_union = set().union(
        *[opt_words[i] for i in range(len(opts)) if i != idx]
    ) if len(opts) > 1 else set()
    echo_unique_words = correct_overlap - distractor_word_union
    distractor_overlaps = [
        len(stem_words & opt_words[i]) for i in range(len(opts)) if i != idx
    ]
    max_distractor_overlap = max(distractor_overlaps) if distractor_overlaps else 0
    echo_margin = len(correct_overlap) - max_distractor_overlap

    return {
        "qid": q.get("id"),
        "correct_idx": idx,
        "correct_len": correct_len,
        "next_longest": next_longest,
        "margin": margin,
        "strict_longest": strict_longest,
        "echo_unique": sorted(echo_unique_words),
        "echo_unique_n": len(echo_unique_words),
        "correct_overlap_n": len(correct_overlap),
        "max_distractor_overlap": max_distractor_overlap,
        "echo_margin": echo_margin,
    }


def flag(r):
    reasons = []
    if r["margin"] >= MARGIN_THRESHOLD:
        reasons.append(f"LEN+{r['margin']}")
    if r["echo_unique_n"] >= ECHO_UNIQUE_THRESHOLD:
        reasons.append(f"ECHO_UNIQ={r['echo_unique_n']}")
    if r["echo_margin"] >= ECHO_MARGIN_THRESHOLD:
        reasons.append(f"ECHO_MARGIN+{r['echo_margin']}")
    return reasons


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--week", nargs="*", type=int, default=[17, 18, 19, 20])
    ap.add_argument("--verbose", action="store_true",
                    help="show echoed words for each flagged question")
    args = ap.parse_args()

    grand = {"files": 0, "questions": 0, "flagged": 0,
             "len_only": 0, "echo_only": 0, "both": 0}

    for week in args.week:
        files = WEEK_FILES.get(week, [])
        week_q = week_flag = 0
        print(f"\n{'='*70}\nWEEK {week}\n{'='*70}")
        for fname in files:
            path = ROOT / fname
            if not path.exists():
                print(f"  MISSING: {fname}")
                continue
            qs = load_questions(path)
            grand["files"] += 1
            results = [analyze_question(q) for q in qs]
            strict_n = sum(1 for r in results if r["strict_longest"])
            flagged = [(r, flag(r)) for r in results]
            flagged = [(r, fr) for r, fr in flagged if fr]
            week_q += len(qs)
            week_flag += len(flagged)
            grand["questions"] += len(qs)
            grand["flagged"] += len(flagged)
            for r, fr in flagged:
                has_len = any(x.startswith("LEN") for x in fr)
                has_echo = any(x.startswith("ECHO") for x in fr)
                if has_len and has_echo:
                    grand["both"] += 1
                elif has_len:
                    grand["len_only"] += 1
                else:
                    grand["echo_only"] += 1
            strict_pct = 100 * strict_n / len(qs) if qs else 0
            status = "OK" if not flagged else f"{len(flagged)} flagged"
            print(f"  {fname:35s} N={len(qs):3d}  "
                  f"strict-longest={strict_pct:4.0f}%  {status}")
            for r, fr in flagged:
                print(f"      Q{r['qid']:>3}: {' '.join(fr):28s} "
                      f"(corr={r['correct_len']} next={r['next_longest']}; "
                      f"echo corr={r['correct_overlap_n']} vs distr={r['max_distractor_overlap']})")
                if args.verbose and r["echo_unique"]:
                    print(f"            echoed-only-by-correct: {', '.join(r['echo_unique'])}")
        print(f"  ---- Week {week}: {week_flag}/{week_q} questions flagged ----")

    print(f"\n{'='*70}\nSUMMARY")
    print(f"  files analyzed : {grand['files']}")
    print(f"  questions      : {grand['questions']}")
    print(f"  flagged        : {grand['flagged']}  "
          f"(len-only={grand['len_only']}, echo-only={grand['echo_only']}, both={grand['both']})")
    print(f"{'='*70}")


if __name__ == "__main__":
    main()

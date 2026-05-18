"""For each Section IV exam file with >40% strict-longest rate, build a plan:
which question IDs to edit, and how many edits are needed to drop below 40%.

Strategy: among questions where the correct answer is strictly the longest,
prioritize editing those with the largest length margin first (they're the
biggest giveaways and most obviously over-detailed).

Writes a markdown plan file per problematic test, plus a master summary.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PLAN_DIR = ROOT / "scripts" / "longest_fix_plans"
PLAN_DIR.mkdir(exist_ok=True)

SECTION_IV_FILES = [
    "Test_L149.js", "Test_L150.js",
    "Test_L151.js", "Test_L151_Part2.js",
    "Test_L152.js", "Test_L152_Part2.js",
    "Test_L153.js",
    "Test_L154.js", "Test_L154_Part2.js",
    "Test_L155.js", "Test_L155_Part2.js",
    "Test_L156.js", "Test_L157.js", "Test_L158.js", "Test_L159.js",
    "Test_Cumulative_Week17.js",
    "Test_L161.js", "Test_L162.js", "Test_L163.js", "Test_L164.js", "Test_L165.js",
    "Test_L166.js", "Test_L166_Part2.js",
    "Test_L167.js", "Test_L168.js", "Test_L169.js", "Test_L170.js",
    "Test_Cumulative_Week18.js",
    "Test_L172.js", "Test_L173.js", "Test_L174.js", "Test_L175.js", "Test_L176.js",
    "Test_L177.js", "Test_L178.js", "Test_L179.js", "Test_L180.js",
    "Test_L181.js", "Test_L182.js",
    "Test_Cumulative_Week19.js",
    "Test_L184.js", "Test_L185.js", "Test_L186.js", "Test_L187.js", "Test_L188.js",
    "Test_L189.js", "Test_L190.js", "Test_L191.js", "Test_L192.js",
]

THRESHOLD_PCT = 40.0


def load_questions(path: Path):
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    while lines and (lines[0].strip().startswith("//") or not lines[0].strip()):
        lines.pop(0)
    text = "\n".join(lines)
    m = re.match(r"^(?:window\.|const\s+|var\s+|let\s+)\w+\s*=\s*(\[.*?\])\s*;\s*(?:window\.\w+\s*=\s*\w+\s*;?\s*)?$", text, re.DOTALL)
    if not m:
        raise SystemExit(f"Could not parse {path.name}")
    return json.loads(m.group(1))


def plan_file(path: Path):
    questions = load_questions(path)
    n = len(questions)
    target_max = int(n * THRESHOLD_PCT / 100)  # strictly < 40%, so max allowed
    if target_max == n * THRESHOLD_PCT / 100:
        target_max -= 1

    rows = []
    strict_count = 0
    for q in questions:
        opts = q["options"]
        idx = q["correctAnswerIndex"]
        lens = [len(o["text"]) for o in opts]
        correct_len = lens[idx]
        others = lens[:idx] + lens[idx+1:]
        second = max(others)
        is_strict = correct_len > second
        margin = correct_len - second
        if is_strict:
            strict_count += 1
        rows.append({
            "qid": q.get("id"),
            "correct_idx": idx,
            "correct_text": opts[idx]["text"],
            "correct_len": correct_len,
            "second_len": second,
            "margin": margin,
            "is_strict": is_strict,
            "other_texts": [o["text"] for i, o in enumerate(opts) if i != idx],
        })

    needs_to_fix = max(0, strict_count - target_max)
    strict_pct = strict_count / n * 100
    if strict_pct < THRESHOLD_PCT or needs_to_fix == 0:
        return None

    # Pick the questions with the largest margin among strict-longest ones.
    strict_rows = [r for r in rows if r["is_strict"]]
    strict_rows.sort(key=lambda r: r["margin"], reverse=True)
    to_edit = strict_rows[:needs_to_fix]

    return {
        "file": path.name,
        "n": n,
        "strict_count": strict_count,
        "strict_pct": strict_pct,
        "target_max": target_max,
        "needs_to_fix": needs_to_fix,
        "to_edit": to_edit,
    }


def write_plan(plan):
    lines = []
    lines.append(f"# Fix plan for {plan['file']}")
    lines.append("")
    lines.append(f"- Questions: {plan['n']}")
    lines.append(f"- Currently strict-longest: {plan['strict_count']} / {plan['n']} ({plan['strict_pct']:.1f}%)")
    lines.append(f"- Target: ≤ {plan['target_max']} (i.e., < 40%)")
    lines.append(f"- Must edit at least: {plan['needs_to_fix']} questions")
    lines.append("")
    lines.append("## Questions to edit (largest margin first)")
    lines.append("")
    for r in plan["to_edit"]:
        lines.append(f"### Q{r['qid']} — correct={r['correct_len']} chars vs next-longest={r['second_len']} chars (margin +{r['margin']})")
        lines.append(f"- correctAnswerIndex: {r['correct_idx']}")
        lines.append(f"- CORRECT TEXT (to shorten or otherwise dethrone-as-longest):")
        lines.append(f"  > {r['correct_text']}")
        lines.append(f"- OTHER OPTION LENGTHS: {[len(t) for t in r['other_texts']]}")
        lines.append("")
    out = PLAN_DIR / (plan["file"].replace(".js", "_plan.md"))
    out.write_text("\n".join(lines), encoding="utf-8")
    return out


def main():
    plans = []
    for fname in SECTION_IV_FILES:
        path = ROOT / fname
        if not path.exists():
            continue
        p = plan_file(path)
        if p:
            plans.append(p)
            write_plan(p)

    # Master summary
    lines = ["# Master fix plan — Section IV", "",
             f"Threshold: strict-longest rate < {THRESHOLD_PCT}%", "",
             "| File | N | Current % | Edits needed |",
             "|---|---:|---:|---:|"]
    plans.sort(key=lambda p: p["strict_pct"], reverse=True)
    for p in plans:
        lines.append(f"| {p['file']} | {p['n']} | {p['strict_pct']:.1f}% | {p['needs_to_fix']} |")
    (PLAN_DIR / "MASTER.md").write_text("\n".join(lines), encoding="utf-8")

    print(f"Wrote {len(plans)} plan files to {PLAN_DIR}")
    print(f"Total questions to edit: {sum(p['needs_to_fix'] for p in plans)}")
    for p in plans:
        print(f"  {p['file']}: {p['needs_to_fix']} edits ({p['strict_pct']:.1f}% -> need < {THRESHOLD_PCT}%)")


if __name__ == "__main__":
    main()

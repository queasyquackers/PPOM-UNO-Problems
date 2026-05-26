"""Analyze Week 18 exams for giveaway-length correct answers.

The user reported that in Week 18 lecture exams, the correct answer is
consistently the longest option, with distractors notably short. The default
40% strict-longest threshold catches the worst files, but Week 18 files like
L168/L169/L166_Part2 have moderate strict-longest rates yet ENORMOUS average
margins (229.7 / 111.3 / 230.8 chars). That means there are individual
questions where the correct answer is many hundreds of chars longer than the
longest distractor.

This script lists every question in Week 18 where the margin (correct minus
next-longest) exceeds 60 chars, ordered by margin, so we can fix them.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

WEEK18_FILES = [
    "Test_L161.js", "Test_L162.js", "Test_L163.js", "Test_L164.js", "Test_L165.js",
    "Test_L166.js", "Test_L166_Part2.js",
    "Test_L167.js", "Test_L168.js", "Test_L169.js", "Test_L170.js",
    "Test_Cumulative_Week18.js",
]

MARGIN_THRESHOLD = 60  # report any question where correct > next+60 chars


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


def main():
    for fname in WEEK18_FILES:
        path = ROOT / fname
        if not path.exists():
            print(f"MISSING: {fname}")
            continue
        questions = load_questions(path)
        flagged = []
        for q in questions:
            opts = q["options"]
            idx = q["correctAnswerIndex"]
            lens = [len(o["text"]) for o in opts]
            correct_len = lens[idx]
            other_lens = lens[:idx] + lens[idx + 1:]
            second = max(other_lens)
            margin = correct_len - second
            if margin >= MARGIN_THRESHOLD:
                flagged.append({
                    "qid": q.get("id"),
                    "correct_idx": idx,
                    "correct_len": correct_len,
                    "second": second,
                    "margin": margin,
                    "other_lens": sorted(other_lens, reverse=True),
                })
        flagged.sort(key=lambda r: r["margin"], reverse=True)
        if flagged:
            print(f"\n=== {fname} — {len(flagged)} questions with margin >= {MARGIN_THRESHOLD} ===")
            for r in flagged:
                print(f"  Q{r['qid']}: correct={r['correct_len']} chars, next={r['second']}, "
                      f"margin=+{r['margin']}, other_lens={r['other_lens']}")
        else:
            print(f"\n{fname}: clean (no questions with margin >= {MARGIN_THRESHOLD})")


if __name__ == "__main__":
    main()

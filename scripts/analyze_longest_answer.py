"""Analyze whether the correct answer in each Block 4 (Section IV) exam tends
to be the longest option (a giveaway pattern).

For each test file: count how often the correct option is strictly longer than
all distractors, how often it's tied for longest, and compute the share. Flags
files where the correct answer is the longest more often than ~40% of the time
(roughly 2x random chance for 5 options).
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Section IV: Hematology-Oncology — Weeks 17-20.
SECTION_IV_FILES = [
    # Week 17
    "Test_L149.js", "Test_L150.js",
    "Test_L151.js", "Test_L151_Part2.js",
    "Test_L152.js", "Test_L152_Part2.js",
    "Test_L153.js",
    "Test_L154.js", "Test_L154_Part2.js",
    "Test_L155.js", "Test_L155_Part2.js",
    "Test_L156.js", "Test_L157.js", "Test_L158.js", "Test_L159.js",
    "Test_Cumulative_Week17.js",
    # Week 18
    "Test_L161.js", "Test_L162.js", "Test_L163.js", "Test_L164.js", "Test_L165.js",
    "Test_L166.js", "Test_L166_Part2.js",
    "Test_L167.js", "Test_L168.js", "Test_L169.js", "Test_L170.js",
    "Test_Cumulative_Week18.js",
    # Week 19
    "Test_L172.js", "Test_L173.js", "Test_L174.js", "Test_L175.js", "Test_L176.js",
    "Test_L177.js", "Test_L178.js", "Test_L179.js", "Test_L180.js",
    "Test_L181.js", "Test_L182.js",
    "Test_Cumulative_Week19.js",
    # Week 20
    "Test_L184.js", "Test_L185.js", "Test_L186.js", "Test_L187.js", "Test_L188.js",
    "Test_L189.js", "Test_L190.js", "Test_L191.js", "Test_L192.js",
]


def load_questions(path: Path):
    text = path.read_text(encoding="utf-8")
    # Strip leading // line comments (some files have a "thinking process" header).
    lines = text.splitlines()
    while lines and (lines[0].strip().startswith("//") or not lines[0].strip()):
        lines.pop(0)
    text = "\n".join(lines)
    # Two forms: `window.X = [...];` OR `const X = [...]; window.X = X;`
    m = re.match(r"^(?:window\.|const\s+|var\s+|let\s+)\w+\s*=\s*(\[.*?\])\s*;\s*(?:window\.\w+\s*=\s*\w+\s*;?\s*)?$", text, re.DOTALL)
    if not m:
        raise SystemExit(f"Could not parse {path.name}")
    return json.loads(m.group(1))


def analyze(path: Path):
    questions = load_questions(path)
    total = 0
    strict_longest = 0  # correct strictly longer than all others
    tied_longest = 0    # correct is one of the longest (ties allowed)
    longest_margin = []  # by how many chars the correct is longer than 2nd longest
    detail = []

    for q in questions:
        opts = q["options"]
        if len(opts) < 2:
            continue
        idx = q["correctAnswerIndex"]
        lengths = [len(o["text"]) for o in opts]
        correct_len = lengths[idx]
        max_len = max(lengths)
        # margin: correct_len - 2nd longest non-correct
        other_lens = lengths[:idx] + lengths[idx+1:]
        second = max(other_lens)
        margin = correct_len - second
        total += 1
        if correct_len > second:
            strict_longest += 1
            longest_margin.append(margin)
        if correct_len == max_len:
            tied_longest += 1
        detail.append({
            "qid": q.get("id"),
            "correct_idx": idx,
            "correct_len": correct_len,
            "max_len": max_len,
            "margin": margin,
            "lengths": lengths,
        })

    strict_pct = strict_longest / total * 100 if total else 0
    tied_pct = tied_longest / total * 100 if total else 0
    avg_margin = sum(longest_margin) / len(longest_margin) if longest_margin else 0
    return {
        "file": path.name,
        "n": total,
        "strict_longest": strict_longest,
        "strict_pct": strict_pct,
        "tied_longest": tied_longest,
        "tied_pct": tied_pct,
        "avg_winning_margin": avg_margin,
        "detail": detail,
    }


def main():
    results = []
    for fname in SECTION_IV_FILES:
        path = ROOT / fname
        if not path.exists():
            print(f"MISSING: {fname}")
            continue
        results.append(analyze(path))

    # Sort by strict_pct descending
    results.sort(key=lambda r: r["strict_pct"], reverse=True)

    print(f"\n{'File':<40} {'N':>4}  {'StrictLongest':>14}  {'TiedLongest':>12}  {'AvgMargin':>10}")
    print("-" * 90)
    for r in results:
        print(f"{r['file']:<40} {r['n']:>4}  "
              f"{r['strict_longest']:>3}/{r['n']:<3} ({r['strict_pct']:>5.1f}%) "
              f" {r['tied_longest']:>3}/{r['n']:<3} ({r['tied_pct']:>5.1f}%) "
              f" {r['avg_winning_margin']:>8.1f}")

    # Flag files where correct is strictly longest > 40% (2x random for 5 options)
    print("\n=== Files exceeding 40% strict-longest threshold ===")
    flagged = [r for r in results if r["strict_pct"] > 40]
    for r in flagged:
        print(f"\n{r['file']}: {r['strict_pct']:.1f}% strict-longest, avg margin {r['avg_winning_margin']:.1f} chars")
        for d in r["detail"]:
            if d["correct_len"] > max(d["lengths"][:d["correct_idx"]] + d["lengths"][d["correct_idx"]+1:]):
                lens_str = ", ".join(str(L) for L in d["lengths"])
                print(f"  Q{d['qid']}: correct={d['correct_len']} chars, others=[{lens_str}], margin=+{d['margin']}")

    return results


if __name__ == "__main__":
    main()

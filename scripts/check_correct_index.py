"""Audit: verify correctAnswerIndex matches the option whose explanation begins with "Correct."

Strategy: strip the leading `window.Test_XXX = ` and trailing `;`, then JSON-parse.
Works because these files are pure JSON arrays after the assignment prefix.
"""
import json
import re
import os
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

BLOCK4_FILES = [
    # Week 17
    'Test_L149.js','Test_L150.js','Test_L151.js','Test_L151_Part2.js','Test_L152.js','Test_L152_Part2.js',
    'Test_L153.js','Test_L154.js','Test_L154_Part2.js','Test_L155.js','Test_L155_Part2.js',
    'Test_L156.js','Test_L157.js','Test_L158.js','Test_L159.js','Test_Cumulative_Week17.js',
    # Week 18
    'Test_L161.js','Test_L162.js','Test_L163.js','Test_L164.js','Test_L165.js','Test_L166.js','Test_L166_Part2.js',
    'Test_L167.js','Test_L168.js','Test_L169.js','Test_L170.js','Test_Cumulative_Week18.js',
    # Week 19
    'Test_L172.js','Test_L173.js','Test_L174.js','Test_L175.js','Test_L176.js','Test_L177.js',
    'Test_L178.js','Test_L179.js','Test_L180.js','Test_L181.js','Test_L182.js','Test_Cumulative_Week19.js',
    # Week 20
    'Test_L184.js','Test_L185.js','Test_L186.js','Test_L187.js','Test_L188.js','Test_L189.js',
    'Test_L190.js','Test_L191.js','Test_L192.js',
    # Pathoma
    'Test_Pathoma_6_2.js','Test_Pathoma_6_3.js','Test_Pathoma_6_4.js','Test_Pathoma_6_5_7.js',
]

ASSIGN_RE = re.compile(r'^\s*(?:window\.(\w+)|(?:const|let|var)\s+(\w+))\s*=\s*\[', re.MULTILINE)
CORRECT_RE = re.compile(r'^\s*Correct[\.\:]', re.IGNORECASE)

total_questions = 0
mismatches = []
no_correct = []
multi_correct = []
parse_errors = []
missing = []

for fname in BLOCK4_FILES:
    fp = os.path.join(ROOT, fname)
    if not os.path.exists(fp):
        missing.append(fname)
        continue
    with open(fp, 'r', encoding='utf-8') as f:
        text = f.read()
    m = ASSIGN_RE.search(text)
    if not m:
        parse_errors.append((fname, 'no assignment match'))
        continue
    key = m.group(1) or m.group(2)
    # Start at the '[' that the regex matched
    start = m.end() - 1
    # Find matching ']' by tracking depth, ignoring brackets in strings
    depth = 0
    i = start
    in_str = False
    quote = None
    end = None
    while i < len(text):
        c = text[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == quote:
                in_str = False
        else:
            if c == '"' or c == "'":
                in_str = True
                quote = c
            elif c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
        i += 1
    if end is None:
        parse_errors.append((fname, 'unbalanced brackets'))
        continue
    body = text[start:end]
    try:
        arr = json.loads(body)
    except Exception as e:
        parse_errors.append((fname, f'JSON: {e}'))
        continue
    if not isinstance(arr, list):
        continue
    for q in arr:
        if not isinstance(q, dict): continue
        opts = q.get('options')
        idx = q.get('correctAnswerIndex')
        if not isinstance(opts, list) or not isinstance(idx, int): continue
        total_questions += 1
        markers = [i for i, o in enumerate(opts) if isinstance(o, dict) and CORRECT_RE.match(o.get('explanation', '') or '')]
        if not markers:
            no_correct.append((key, q.get('id'), idx))
            continue
        if len(markers) > 1:
            multi_correct.append((key, q.get('id'), markers, idx))
        if idx not in markers:
            mismatches.append({
                'key': key,
                'id': q.get('id'),
                'declared': idx,
                'rationale': markers,
                'declared_text': (opts[idx].get('text') if 0 <= idx < len(opts) else '')[:90],
                'rationale_text': (opts[markers[0]].get('text') or '')[:90],
            })

print(f'Scanned {total_questions} questions across {len(BLOCK4_FILES) - len(missing) - len(parse_errors)} files')
if missing: print(f'Missing: {missing}')
if parse_errors:
    print('Parse errors:')
    for f, e in parse_errors: print(f'  {f}: {e}')

print()
print(f'=== MISMATCHES (declared index != rationale "Correct." index): {len(mismatches)} ===')
for m in mismatches:
    print(f'  {m["key"]} q#{m["id"]}:')
    print(f'    declared  idx={m["declared"]} -> "{m["declared_text"]}"')
    print(f'    rationale idx={m["rationale"]} -> "{m["rationale_text"]}"')

print()
print(f'=== NO "Correct." marker in any option: {len(no_correct)} ===')
for k, qid, idx in no_correct[:20]:
    print(f'  {k} q#{qid} (declared={idx})')

print()
print(f'=== MULTIPLE "Correct." markers: {len(multi_correct)} ===')
for k, qid, markers, idx in multi_correct:
    print(f'  {k} q#{qid}: markers={markers} declared={idx}')

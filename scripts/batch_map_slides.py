#!/usr/bin/env python3
"""
Batch process all Week 4 test files to add slide mappings
"""
import json
import re
import subprocess
import os

# Mapping of lecture numbers to their PDF filenames
PDF_FILES = {
    "L38": "pdfs/Lecture # 38a. M. Terzella, D.O. (PPT).pdf",
    "L39": "pdfs/Lecture # 39. L. Goldstein, Pharm.D. (PPT)-1.pdf",
    "L40": "pdfs/Lecture # 40. A. Leder, D.O. (PPT)-1.pdf",
    "L41": "pdfs/Lecture # 41. A. Leder, D.O. (PPT)-1.pdf",
    "L42": "pdfs/Lecture # 42. M. Plummer, M.D. (PPT)-1.pdf",
    "L43": "pdfs/Lecture # 43. M. Pino, Ph.D. (PPT)-1.pdf",
    "L44": "pdfs/Lecture # 44. A. Nattis, D.O. (PPT).pdf",
    "L45": "pdfs/Lecture # 45. J. Xie, Ph.D. (PPT).pdf",
    "L46": "pdfs/Lecture # 46. R. Morgan, D.O. (PPT).pdf",
}

def extract_questions_from_js(js_file):
    """Extract question array from Test_LXX.js file"""
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match the array assignment
    match = re.search(r'window\.Test_L\d+\s*=\s*(\[.*?\]);', content, re.DOTALL)
    if match:
        return match.group(1)
    return None

def process_lecture(lecture_num):
    """Process a single lecture"""
    print(f"\n=== Processing {lecture_num} ===")
    
    js_file = f"Test_{lecture_num}.js"
    temp_json = f"temp_{lecture_num}.json"
    pdf_file = PDF_FILES[lecture_num]
    
    # Step 1: Extract questions to JSON
    questions_array = extract_questions_from_js(js_file)
    if not questions_array:
        print(f"ERROR: Could not extract questions from {js_file}")
        return None
    
    with open(temp_json, 'w', encoding='utf-8') as f:
        f.write(questions_array)
    
    # Step 2: Run mapping script
    result = subprocess.run(
        ['python', 'scripts/map_slides_v2.py', pdf_file, temp_json],
        capture_output=True,
        text=True
    )
    
    if result.returncode != 0:
        print(f"ERROR mapping {lecture_num}:")
        print(result.stderr)
        return None
    
    mapping = json.loads(result.stdout)
    print(f"Mapped {len(mapping)} questions")
    
    # Clean up temp file
    os.remove(temp_json)
    
    return mapping

if __name__ == '__main__':
    results = {}
    for lecture in ["L39", "L40", "L41", "L42", "L43", "L44", "L45", "L46"]:
        mapping = process_lecture(lecture)
        if mapping:
            results[lecture] = mapping
    
    # Output all results
    with open('all_mappings.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    
    print("\n=== All mappings saved to all_mappings.json ===")

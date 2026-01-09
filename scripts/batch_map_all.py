#!/usr/bin/env python3
"""
Comprehensive batch slide mapping for ALL lectures
"""
import json
import re
import subprocess
import os
import glob

def find_pdf_for_lecture(lecture_num):
    """Find the actual PDF filename for a lecture"""
    # Try common patterns
    patterns = [
        f"pdfs/Lecture # {lecture_num}*.pdf",
        f"pdfs/Lecture #{lecture_num}*.pdf",
        f"pdfs/L{lecture_num}*.pdf",
    ]
    
    for pattern in patterns:
        matches = glob.glob(pattern)
        if matches:
            # Return the first match (prefer non-supplemental)
            for match in matches:
                if 'Supplemental' not in match and 'Work Slids' not in match:
                    return match
            return matches[0]
    
    return None

def extract_questions_from_js(js_file):
    """Extract question array from Test_LXX.js file"""
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match the array assignment
    match = re.search(r'window\.Test_L[\da-z]+\s*=\s*(\[.*?\]);', content, re.DOTALL)
    if match:
        return match.group(1)
    return None

def process_lecture(lecture_num):
    """Process a single lecture"""
    print(f"\n=== Processing {lecture_num} ===")
    
    js_file = f"Test_{lecture_num}.js"
    if not os.path.exists(js_file):
        print(f"  SKIP: {js_file} not found")
        return None
    
    # Find PDF
    pdf_file = find_pdf_for_lecture(lecture_num.replace('L', ''))
    if not pdf_file:
        print(f"  SKIP: No PDF found for {lecture_num}")
        return None
    
    print(f"  PDF: {pdf_file}")
    
    temp_json = f"temp_{lecture_num}.json"
    
    # Step 1: Extract questions to JSON
    questions_array = extract_questions_from_js(js_file)
    if not questions_array:
        print(f"  ERROR: Could not extract questions from {js_file}")
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
        print(f"  ERROR mapping:")
        print(result.stderr[:500])  # Truncate error
        os.remove(temp_json)
        return None
    
    mapping = json.loads(result.stdout)
    print(f"  Mapped {len(mapping)} questions")
    
    # Clean up temp file
    os.remove(temp_json)
    
    return mapping

if __name__ == '__main__':
    # All lectures to process (excluding L38-L46 which are done)
    lectures_to_process = [
        "L1a", "L1b", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9",
        "L10", "L11", "L12", "L13", "L15", "L16", "L17", "L18", "L19",
        "L20", "L21", "L22", "L23", "L24", "L25", "L26", "L27", "L28", "L29",
        "L30", "L31", "L32", "L33", "L34", "L35", "L36", "L37"
    ]
    
    results = {}
    for lecture in lectures_to_process:
        mapping = process_lecture(lecture)
        if mapping:
            results[lecture] = mapping
    
    # Save all results
    output_file = 'all_mappings_comprehensive.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n=== Successfully mapped {len(results)} lectures ===")
    print(f"=== Results saved to {output_file} ===")

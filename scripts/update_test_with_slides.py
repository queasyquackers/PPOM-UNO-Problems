import json
import re
import sys

def update_test_file(js_file_path, slide_mapping):
    """Update a Test_LXX.js file with pdfPage properties"""
    
    with open(js_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Parse the slide mapping
    mapping = json.loads(slide_mapping)
    
    # For each question ID, add pdfPage property
    for qid, page_num in mapping.items():
        # Find the question block with this ID
        pattern = rf'(\{{\s*"id":\s*{qid},)'
        
        # Check if pdfPage already exists for this question
        # Look ahead to the next question or end of array
        next_q_pattern = rf'"id":\s*{qid},.*?(?="id":|window\.Test_L\d+\s*=|$)'
        match = re.search(next_q_pattern, content, re.DOTALL)
        
        if match and '"pdfPage"' not in match.group(0):
            # Add pdfPage after clinicalPearl
            replacement = rf'\1\n    "pdfPage": {page_num},'
            content = re.sub(pattern, replacement, content, count=1)
    
    with open(js_file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {js_file_path}")

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python update_test_with_slides.py <test_file.js> <mapping_json>")
        sys.exit(1)
    
    js_file = sys.argv[1]
    mapping_json = sys.argv[2]
    
    update_test_file(js_file, mapping_json)

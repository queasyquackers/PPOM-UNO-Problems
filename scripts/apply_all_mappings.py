#!/usr/bin/env python3
"""
Apply all slide mappings to Test files
"""
import json
import re

def update_test_file_with_mapping(lecture_num, mapping):
    """Update a Test_LXX.js file with PDF page mappings"""
    filename = f"Test_{lecture_num}.js"
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # For each question ID, find and update
    for q_id, page_num in mapping.items():
        # Pattern to find the clinicalPearl line for this question
        # We need to find the question with this ID and add pdfPage after clinicalPearl
        
        # Find the question block
        pattern = rf'("id":\s*{q_id},.+?"clinicalPearl":\s*"[^"]+?")([\r\n\s]*\}})'
        
        def replace_func(match):
            pearl_part = match.group(1)
            closing = match.group(2)
            # Check if pdfPage already exists
            if '"pdfPage"' in closing:
                return match.group(0)  # Already has pdfPage
            # Add pdfPage before the closing brace
            return f'{pearl_part},\n    "pdfPage": {page_num}{closing}'
        
        content = re.sub(pattern, replace_func, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"[OK] Updated {filename} with {len(mapping)} slide mappings")

if __name__ == '__main__':
    # Load all mappings
    with open('all_mappings.json', 'r', encoding='utf-8') as f:
        all_mappings = json.load(f)
    
    # Update each file
    for lecture_num, mapping in all_mappings.items():
        update_test_file_with_mapping(lecture_num, mapping)
    
    print("\n=== All test files updated successfully! ===")

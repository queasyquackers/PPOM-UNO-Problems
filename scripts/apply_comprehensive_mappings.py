#!/usr/bin/env python3
"""
Apply comprehensive slide mappings to ALL Test files
"""
import json
import re
import os

def update_test_file_with_mapping(lecture_num, mapping):
    """Update a Test_LXX.js file with PDF page mappings"""
    filename = f"Test_{lecture_num}.js"
    
    if not os.path.exists(filename):
        print(f"  SKIP: {filename} not found")
        return False
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # For each question ID, find and update
    updated_count = 0
    for q_id, page_num in mapping.items():
        # Pattern to find the clinicalPearl line for this question
        pattern = rf'("id":\s*{q_id},.+?"clinicalPearl":\s*"[^"]+?")([\r\n\s]*\}})'
        
        def replace_func(match):
            nonlocal updated_count
            pearl_part = match.group(1)
            closing = match.group(2)
            # Check if pdfPage already exists
            if '"pdfPage"' in closing:
                return match.group(0)  # Already has pdfPage
            # Add pdfPage before the closing brace
            updated_count += 1
            return f'{pearl_part},\n    "pdfPage": {page_num}{closing}'
        
        content = re.sub(pattern, replace_func, content, flags=re.DOTALL)
    
    if updated_count > 0:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[OK] Updated {filename} with {updated_count} slide mappings")
        return True
    else:
        print(f"[SKIP] {filename} already has mappings")
        return False

if __name__ == '__main__':
    # Load comprehensive mappings
    mapping_file = 'all_mappings_comprehensive.json'
    
    if not os.path.exists(mapping_file):
        print(f"ERROR: {mapping_file} not found!")
        exit(1)
    
    with open(mapping_file, 'r', encoding='utf-8') as f:
        all_mappings = json.load(f)
    
    # Update each file
    total_updated = 0
    for lecture_num, mapping in all_mappings.items():
        if update_test_file_with_mapping(lecture_num, mapping):
            total_updated += 1
    
    print(f"\n=== Successfully updated {total_updated}/{len(all_mappings)} test files ===")

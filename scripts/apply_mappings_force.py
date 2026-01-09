#!/usr/bin/env python3
"""
Apply comprehensive slide mappings - FORCE UPDATE mode
Replace ALL pdfPage values (including those set to 0)
"""
import json
import re
import os

def update_test_file_with_mapping_force(lecture_num, mapping):
    """Update a Test_LXX.js file with PDF page mappings - FORCE mode"""
    filename = f"Test_{lecture_num}.js"
    
    if not os.path.exists(filename):
        print(f"  SKIP: {filename} not found")
        return False
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # For each question ID, find and UPDATE (even if exists)
    updated_count = 0
    for q_id, page_num in mapping.items():
        # Pattern to find pdfPage that already exists
        pattern_existing = rf'("id":\s*{q_id},.+?"clinicalPearl":\s*"[^"]+?",[\r\n\s]+"pdfPage":\s*)\d+'
        
        def replace_existing(match):
            nonlocal updated_count
            updated_count += 1
            return f'{match.group(1)}{page_num}'
        
        # Try to replace existing pdfPage
        new_content = re.sub(pattern_existing, replace_existing, content, flags=re.DOTALL)
        
        if new_content != content:
            content = new_content
        else:
            # If no existing pdfPage, add it
            pattern_add = rf'("id":\s*{q_id},.+?"clinicalPearl":\s*"[^"]+?")([\r\n\s]*\}})'
            
            def replace_add(match):
                nonlocal updated_count
                pearl_part = match.group(1)
                closing = match.group(2)
                if '"pdfPage"' not in closing:
                    updated_count += 1
                    return f'{pearl_part},\n    "pdfPage": {page_num}{closing}'
                return match.group(0)
            
            content = re.sub(pattern_add, replace_add, content, flags=re.DOTALL)
    
    if updated_count > 0:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[OK] Updated {filename} with {updated_count}/{len(mapping)} slide mappings")
        return True
    else:
        print(f"[SKIP] {filename} - no changes needed")
        return False

if __name__ == '__main__':
    # Load comprehensive mappings
    mapping_file = 'all_mappings_comprehensive.json'
    
    if not os.path.exists(mapping_file):
        print(f"ERROR: {mapping_file} not found!")
        exit(1)
    
    with open(mapping_file, 'r', encoding='utf-8') as f:
        all_mappings = json.load(f)
    
    # Update each file - FORCE mode
    total_updated = 0
    for lecture_num, mapping in all_mappings.items():
        if update_test_file_with_mapping_force(lecture_num, mapping):
            total_updated += 1
    
    print(f"\n=== Successfully updated {total_updated}/{len(all_mappings)} test files ===")

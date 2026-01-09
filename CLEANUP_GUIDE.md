# Files Safe to Delete

## Temporary/Intermediate Files (DELETE)

These were created during the slide mapping process and are no longer needed:

- `temp_L38.json` - temporary JSON file from mapping
- `all_mappings.json` - intermediate Week 4 mapping results
- `all_mappings_comprehensive.json` - comprehensive mapping results

**Command to delete:**

```powershell
Remove-Item temp_L38.json, all_mappings.json, all_mappings_comprehensive.json
```

## Mapping Scripts (KEEP - Required for Future Updates)

These scripts are essential for adding slide mappings to new questions. **DO NOT DELETE:**

- `scripts/map_slides_v2.py` - PDF text extraction engine
- `scripts/batch_map_all.py` - batch processor for all lectures
- `scripts/apply_all_mappings.py` - applies mappings to test files
- `scripts/apply_comprehensive_mappings.py` - comprehensive mapper
- `scripts/apply_mappings_force.py` - force-update utility
- `scripts/update_test_with_slides.py` - test file updater

**Use Case:** When you generate new questions, run these scripts to automatically map them to PDF slides.

## Pathology Test Files (DELETED - see below)

- `TestPathology.js` - removed from project
- Removed from `config.js`
- Removed from `pdf_mapping.js`

## Files to KEEP

### Essential Application Files:

- `index.html` - main HTML file
- `app.js` - core application logic
- `config.js` - test configuration
- `styles.css` - application styles
- `scripts/pdf_mapping.js` - PDF file path mappings
- All `Test_L*.js` files - question data

### PDF Files:

- All `pdfs/Lecture #*.pdf` files - needed for the "Open PDF" button

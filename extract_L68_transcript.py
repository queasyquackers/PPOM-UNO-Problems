
import xml.etree.ElementTree as ET

input_file = "d:/PPOM-UNO-Problems/transcripts/Lecture #68_ Physiology_ Drug Addiction_Faculty_ G. Otazu, Ph.D.dfxp"
output_file = "d:/PPOM-UNO-Problems/extracted_L68_text.txt"

try:
    tree = ET.parse(input_file)
    root = tree.getroot()
    
    # Define namespace map to find tags
    ns = {'tt': 'http://www.w3.org/ns/ttml'}
    
    text_content = []
    
    # Find all 'p' tags in the body div
    for p in root.findall('.//tt:p', ns):
        if p.text:
            text_content.append(p.text.strip())
            
    full_text = "\n".join(text_content)
    
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(full_text)
        
    print(f"Successfully extracted {len(text_content)} lines to {output_file}")

except Exception as e:
    print(f"Error extracting text: {e}")

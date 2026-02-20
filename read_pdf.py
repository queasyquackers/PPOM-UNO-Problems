import sys

try:
    import fitz # PyMuPDF
    doc = fitz.open("pdfs/Lecture # 65. L. Goldstein, Pharm.D. (PPT) 2.12.26.pdf")
    text = ""
    for page in doc:
        text += f"--- SLIDE {page.number + 1} ---\n"
        text += page.get_text() + "\n"
    with open("l65_new_extracted.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Success with fitz")
except ImportError:
    try:
        import PyPDF2
        with open("pdfs/Lecture # 65. L. Goldstein, Pharm.D. (PPT) 2.12.26.pdf", "rb") as f:
            reader = PyPDF2.PdfReader(f)
            text = ""
            for i, page in enumerate(reader.pages):
                text += f"--- SLIDE {i + 1} ---\n"
                text += page.extract_text() + "\n"
        with open("l65_new_extracted.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("Success with PyPDF2")
    except Exception as e:
        print("Failed:", e)
except Exception as e:
    print("Failed:", e)

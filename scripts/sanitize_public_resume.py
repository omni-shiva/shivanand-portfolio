from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import ContentStream, FloatObject, TextStringObject
from reportlab.pdfbase.pdfmetrics import stringWidth


SOURCE = Path(
    "/Users/shiva/Documents/resume_AND_job/Resume/"
    "Shivanand_Kumar_ Data_AI_Engineer_Resume.pdf"
)
DESTINATION = Path(
    "/Users/shiva/Documents/AI_Career/portfolio/public/"
    "Shivanand_Kumar_Senior_Data_Engineer_Resume.pdf"
)

PHONE_FRAGMENT = " | +91 79994 66461 | Bengaluru, India | "
PUBLIC_FRAGMENT = " | Bengaluru, India | "
FONT_NAME = "Helvetica"
FONT_SIZE = 7.35


def shift_rect(annotation, offset: float) -> None:
    rect = annotation["/Rect"]
    rect[0] = FloatObject(float(rect[0]) + offset)
    rect[2] = FloatObject(float(rect[2]) + offset)


def build_public_resume() -> None:
    writer = PdfWriter(clone_from=SOURCE)
    page = writer.pages[0]
    stream = ContentStream(page.get_contents(), writer)

    removed_width = stringWidth(PHONE_FRAGMENT, FONT_NAME, FONT_SIZE) - stringWidth(
        PUBLIC_FRAGMENT, FONT_NAME, FONT_SIZE
    )
    start_shift = removed_width / 2

    contact_replaced = False
    start_adjusted = False
    for index, (operands, operator) in enumerate(stream.operations):
        if operator == b"Tj" and operands and str(operands[0]) == PHONE_FRAGMENT:
            operands[0] = TextStringObject(PUBLIC_FRAGMENT)
            contact_replaced = True

            for previous in range(index - 1, -1, -1):
                previous_operands, previous_operator = stream.operations[previous]
                if previous_operator == b"Td" and len(previous_operands) == 2:
                    previous_operands[0] = FloatObject(
                        float(previous_operands[0]) + start_shift
                    )
                    start_adjusted = True
                    break
            break

    if not contact_replaced or not start_adjusted:
        raise RuntimeError("Could not locate the expected résumé contact line")

    for annotation_ref in page.get("/Annots", []):
        annotation = annotation_ref.get_object()
        action = annotation.get("/A")
        uri = str(action.get("/URI", "")) if action else ""
        if uri.startswith("mailto:"):
            shift_rect(annotation, start_shift)
        elif "linkedin.com/in/shivachauhan" in uri:
            shift_rect(annotation, -start_shift)

    page.replace_contents(stream)

    DESTINATION.parent.mkdir(parents=True, exist_ok=True)
    with DESTINATION.open("wb") as destination:
        writer.write(destination)

    verification = "\n".join(
        extracted.extract_text() or "" for extracted in PdfReader(DESTINATION).pages
    )
    if "79994 66461" in verification:
        raise RuntimeError("Phone number remains in the public résumé")


if __name__ == "__main__":
    build_public_resume()
    print(DESTINATION)

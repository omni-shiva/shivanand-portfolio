import argparse
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import ContentStream, FloatObject, TextStringObject
from reportlab.pdfbase.pdfmetrics import stringWidth


FONT_NAME = "Helvetica"

CONTACT_VARIANTS = [
    {
        "private": " | +91 79994 66461 | Bengaluru, India",
        "public": " | Bengaluru, India",
        "font_size": 8.1,
        "link_shift": "all",
    },
    {
        "private": " | +91 79994 66461 | Bengaluru, India | ",
        "public": " | Bengaluru, India | ",
        "font_size": 7.35,
        "link_shift": "split",
    },
]


def shift_rect(annotation, offset: float) -> None:
    rect = annotation["/Rect"]
    rect[0] = FloatObject(float(rect[0]) + offset)
    rect[2] = FloatObject(float(rect[2]) + offset)


def build_public_resume(source: Path, destination: Path) -> None:
    writer = PdfWriter(clone_from=source)
    page = writer.pages[0]
    stream = ContentStream(page.get_contents(), writer)

    contact_replaced = False
    start_adjusted = False
    link_shift = ""
    start_shift = 0.0

    for index, (operands, operator) in enumerate(stream.operations):
        if operator != b"Tj" or not operands:
            continue

        variant = next(
            (
                candidate
                for candidate in CONTACT_VARIANTS
                if str(operands[0]) == candidate["private"]
            ),
            None,
        )
        if variant is None:
            continue

        private_fragment = str(variant["private"])
        public_fragment = str(variant["public"])
        font_size = float(variant["font_size"])
        removed_width = stringWidth(
            private_fragment, FONT_NAME, font_size
        ) - stringWidth(public_fragment, FONT_NAME, font_size)
        start_shift = removed_width / 2
        link_shift = str(variant["link_shift"])

        operands[0] = TextStringObject(public_fragment)
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
        if link_shift == "all":
            shift_rect(annotation, start_shift)
        elif uri.startswith("mailto:"):
            shift_rect(annotation, start_shift)
        elif "linkedin.com/in/shivachauhan" in uri:
            shift_rect(annotation, -start_shift)

    page.replace_contents(stream)

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as output:
        writer.write(output)

    verification = "\n".join(
        extracted.extract_text() or "" for extracted in PdfReader(destination).pages
    )
    if "79994 66461" in verification:
        raise RuntimeError("Phone number remains in the public résumé")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Create a privacy-safe public résumé without changing its layout."
    )
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    arguments = parser.parse_args()

    build_public_resume(arguments.source, arguments.destination)
    print(arguments.destination)

import io
import codecs

from PIL import Image


def base64_to_image(byte64_str: str, grayscale: bool = False):
    bytearr = codecs.decode(codecs.encode(byte64_str, encoding="ascii"), encoding="base64")

    if grayscale:
        return Image.open(io.BytesIO(bytearr)).convert("L")

    return Image.open(io.BytesIO(bytearr)).convert("RGB")

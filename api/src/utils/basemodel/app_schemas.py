from pydantic import BaseModel

class BotSummarizeSchema(BaseModel):
    context: str = ''
    prompt: str = ''
    config: dict = {}

class BotChatSchema(BaseModel):
    context: str = ''

class TextDetectionSchema(BaseModel):
    image_base64: str = ''

class TextRecognitionSchema(BaseModel):
    image_base64: str = ''
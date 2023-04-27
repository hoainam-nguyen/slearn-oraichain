from pydantic import BaseModel

class BotSummarizechema(BaseModel):
    context: str = ''
    prompt: str = ''
    config: dict = {}

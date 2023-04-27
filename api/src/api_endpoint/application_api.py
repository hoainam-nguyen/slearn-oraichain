
import logging

from src.const.global_map import RESOURCE_MAP
from src.api_endpoint.add_api import api_log_aischema
from src.utils.basemodel import app_schemas as schemas
from src.utils.basemodel.response_schemas import create_response, ResponseModel


ai_logger = logging.getLogger("ai_logger")
app_logger = logging.getLogger("app_logger")


app = RESOURCE_MAP["fastapi_app"]

# ===================== SYSTEM ===============================


# ===================== USER =================================


# ===================== OCR ==================================


# ===================== BOT ==================================

@app.post("/bot/summarize")
@api_log_aischema
async def bot_summarize_api(input_map: schemas.BotSummarizechema) -> ResponseModel:
    
    try:
        content = RESOURCE_MAP['bot_summarize'](
            context=input_map.context,
            prompt=input_map.prompt if input_map.prompt else None,
            config=input_map.config            
        )
        return ResponseModel(status_code=200, msg='Finish!', content=content)
    except:
        return ResponseModel(status_code=500, msg='Error!', content='')


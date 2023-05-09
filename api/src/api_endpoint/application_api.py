
import logging

from src.const.global_map import RESOURCE_MAP
from src.api_endpoint.add_api import api_log_aischema
from src.utils.basemodel import app_schemas as schemas
from src.utils.basemodel.response_schemas import  ResponseModel

from src.utils.image_utils import base64_to_image, sort_bounding_boxes


ai_logger = logging.getLogger("ai_logger")
app_logger = logging.getLogger("app_logger")


app = RESOURCE_MAP["fastapi_app"]

# ===================== SYSTEM ===============================
@app.get("/healthy")
async def healthy_check() -> ResponseModel:
    return ResponseModel(status_code=200, msg='Finish!', content="OK")

# ===================== USER =================================


# ===================== OCR ==================================
@app.post("/text/detect")
@api_log_aischema
async def text_detect_api(input_map: schemas.TextDetectionSchema) -> ResponseModel:
    try:
        image0 = base64_to_image(byte64_str=input_map.image_base64)
        boxes = RESOURCE_MAP['text_detect'].predict(image0)
        return ResponseModel(status_code=200, msg='Finish!', content=dict(boxes=boxes))
    except Exception as e:
        return ResponseModel(status_code=500, msg='Error!', content=str(e))

@app.post("/text/recognize")
async def text_recognize_api(input_map: schemas.TextRecognitionSchema) -> ResponseModel:
    try:
        image0 = base64_to_image(byte64_str=input_map.image_base64)
        text = RESOURCE_MAP['text_recognize'].predict(image0)
        return ResponseModel(status_code=200, msg='Finish!', content=dict(text=text))
    except Exception as e:
        return ResponseModel(status_code=500, msg='Error!', content=str(e))   

@app.post("/text/e2e")
async def text_e2e_api(input_map: schemas.TextDetectionSchema) -> ResponseModel:
    try:
        # Detection
        image0 = base64_to_image(byte64_str=input_map.image_base64)
        boxes = RESOURCE_MAP['text_detect'].predict(image0)
        result = []
        
        # Recognition
        for box in boxes:
            cropped_image = image0.crop(box)
            text = RESOURCE_MAP['text_recognize'].predict(cropped_image) 
            result.append(
                dict(
                    bbox = box,
                    text = text
                )
            )
                          
        return ResponseModel(status_code=200, msg='Finish!', content=result)
        
    except Exception as e:
        return ResponseModel(status_code=500, msg='Error!', content=str(e))   
        
@app.post("/img2doc")
async def img2doc_api(input_map: schemas.TextDetectionSchema) -> ResponseModel:
    try:
        # Detection
        image0 = base64_to_image(byte64_str=input_map.image_base64)
        boxes = RESOURCE_MAP['text_detect'].predict(image0)
        
        # Sort
        groups = sort_bounding_boxes(bounding_boxes=boxes)
        # Recognition
        result = []
        for boxes in groups:
            _res = []
            for box in boxes:
                cropped_image = image0.crop(box)
                text = RESOURCE_MAP['text_recognize'].predict(cropped_image) 
                _res.append(text)
            result.append(_res)
        
        result = [' '.join(res) for res in result]
        result = '\n'.join(result)
           
        return ResponseModel(status_code=200, msg='Finish!', content=result)
        
        # Recognition
    except Exception as e:
        return ResponseModel(status_code=500, msg='Error!', content=str(e))   
# ===================== BOT ==================================

@app.post("/bot/summarize")
@api_log_aischema
async def bot_summarize_api(input_map: schemas.BotSummarizeSchema) -> ResponseModel:
    
    try:
        content = RESOURCE_MAP['bot_summarize'](
            context=input_map.context,
            prompt=input_map.prompt if input_map.prompt else None,
            config=input_map.config            
        )
        return ResponseModel(status_code=200, msg='Finish!', content=content)
    except:
        return ResponseModel(status_code=500, msg='Error!', content='')

@app.post("/bot/chat")
@api_log_aischema
async def bot_chat_api(input_map: schemas.BotChatSchema) -> ResponseModel:
    try:
        content = RESOURCE_MAP['bot_chat'](
            context=input_map.context
        )
        return ResponseModel(status_code=200, msg='Finish!', content=content)
        
    except:
        return ResponseModel(status_code=500, msg='Error!', content='')
        
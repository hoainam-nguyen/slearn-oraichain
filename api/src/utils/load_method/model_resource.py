import time
import logging

from src.utils.load_method.load_utils import register_load_method
from src.models.bots import BotSummarize, BotChat
from src.models.text_detect import TextDetectionYOLOv8
from src.models.text_recognize import TextRecognitionParseq

logger = logging.getLogger("utils_logger")


@register_load_method
def load_bot_summarize():
    t1 = time.time()
    model = BotSummarize()
    t2 = time.time()

    logger.info(f"Bot summarize loading success in {t2 - t1}s.")
    logger.info("Bot summarize loading success.")

    return model

@register_load_method
def load_bot_chat():
    t1 = time.time()
    model = BotChat()
    t2 = time.time()
    
    logger.info(f"Bot summarize loading success in {t2 - t1}s.")
    logger.info("Bot summarize loading success.")

    return model

@register_load_method
def load_text_detection(model_path: str, threshold: float):
    t1 = time.time() 
    model = TextDetectionYOLOv8(model_path=model_path, threshold=threshold)
    t2 = time.time()
    logger.info(f"Text detection model loading success in {t2 - t1}s.")
    
    return model

@register_load_method
def load_text_recognize(model_path: str, threshold: float):
    t1 = time.time() 
    model = TextRecognitionParseq(model_path=model_path, threshold=threshold)
    t2 = time.time()
    logger.info(f"Text recognition model loading success in {t2 - t1}s.")
    
    return model  
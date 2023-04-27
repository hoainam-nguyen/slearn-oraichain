import time
import logging

from src.utils.load_method.load_utils import register_load_method
from src.models.bots import BotSummarize

logger = logging.getLogger("utils_logger")


@register_load_method
def load_bot_summarize():
    t1 = time.time()
    model = BotSummarize()
    t2 = time.time()

    logger.info(f"Bot summarize loading success in {t2 - t1}s.")
    logger.info("Bot summarize loading success.")

    return model


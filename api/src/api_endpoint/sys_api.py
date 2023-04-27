import logging

from src.const.global_map import RESOURCE_MAP
from src.utils.basemodel.response_schemas import create_response, ResponseModel
from src.api_endpoint.add_api import api_log_no_response_content


app = RESOURCE_MAP["fastapi_app"]
app_logger = logging.getLogger("app_logger")


@app.get("/ping", response_model=ResponseModel)
@api_log_no_response_content
async def ping() -> ResponseModel:
    return create_response(status_code=200, content={"status": "Healthy"})


@app.get("/shutdown")
@api_log_no_response_content
async def shutdown():
    app_logger.info("Receive shutdown request")
    raise KeyboardInterrupt

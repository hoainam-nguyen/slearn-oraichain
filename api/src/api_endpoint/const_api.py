import sys

from fastapi import Request

from src.const import const_map as CONST_MAP
from src.const.global_map import RESOURCE_MAP
from src.api_endpoint.add_api import api_log
from src.utils.basemodel.response_schemas import create_response, ResponseModel


app = RESOURCE_MAP["fastapi_app"]


@app.get("/const", response_model=ResponseModel)
@api_log
async def get_const() -> ResponseModel:
    answer = {}
    for key in CONST_MAP.__dir__():
        if not str(key).startswith("__"):
            value = getattr(CONST_MAP, key)
            if type(value) is not type(sys):
                answer[key] = value

    return create_response(status_code=200, content=answer)


@app.post("/update-const", response_model=ResponseModel)
@api_log
async def update_const(request: Request) -> ResponseModel:
    """
    Update new value for key in CONST_MAP

    Args:
        request(Request): request body

    Returns:
        ResponseModel: new key-value
    """

    input_map = await request.json()
    answer = {}
    for key in input_map:
        setattr(CONST_MAP, key, input_map[key])
        answer[key] = getattr(CONST_MAP, key)

    return create_response(status_code=200, content=answer)


@app.post("/delete-const", response_model=ResponseModel)
@api_log
async def del_const(request: Request) -> ResponseModel:
    input_map = await request.json()
    for key in input_map:
        delattr(CONST_MAP, key)

    tmp = await get_const()
    return tmp

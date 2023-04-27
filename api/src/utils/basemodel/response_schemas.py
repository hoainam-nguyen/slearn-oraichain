
from typing import Any

from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder


def create_response(status_code: int, msg:str, content: Any):
    content = jsonable_encoder(content)
    # content = json.dumps(content, ensure_ascii=True, sort_keys=True, indent=4)

    return ResponseModel(status_code=status_code, msg=msg, content=content)


class ResponseCode:
    SUCCESS_CODE: int = 200
    ERROR_CODE: int = 500

class ResponseModel(BaseModel):
    msg: str
    status_code: int
    content: Any

    class Config:
        schema_extra = {
            "example": [
                {
                    "status": ResponseCode.SUCCESS_CODE,
                    "data": {
                        "status": "process_done",
                        "content": None
                    }
                },
                {
                    "status": ResponseCode.ERROR_CODE,
                    "data": {
                        "status": "invalid_token",
                        "content": None
                    }
                },
                {
                    "status": ResponseCode.ERROR_CODE,
                    "data": {
                        "status": "internal_server_error",
                        "content": None
                    }
                }
            ]
        }

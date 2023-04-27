import sys
import hashlib
import logging
import functools
from typing import Any, Callable

from fastapi import status
from fastapi.responses import JSONResponse

from src.utils.basemodel.response_schemas import ResponseModel


app_logger = logging.getLogger("app_logger")
error_logger = logging.getLogger("error_logger")


def api_log(func: Callable) -> Any:
    """
    API_log function transform a function for process and logging

    Args:
        func (Callable)

    Returns:
        Any: function result and logging(including its name, status, and data result)
    """

    @functools.wraps(func)
    async def api_log_decorator(*args, **kwargs):
        # input_map = request.json()
        app_logger.info("%s request: start: %s", func.__name__, str(kwargs))
        try:
            response = await func(*args, **kwargs)
            if type(response) == ResponseModel:
                app_logger.info("%s request: finish: %s, %s.\n", func.__name__, str(response.status_code), str(response.content))
            else:
                app_logger.info("%s request: finish: %s.\n", func.__name__, str(response))
            return response
        except Exception as e:
            error_logger.error("%s request: error: %s.\n", func.__name__, e, exc_info=True)
            return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content=f"{func.__name__} request: error: {e}")
    return api_log_decorator


def api_log_no_response_content(func: Callable) -> Any:
    """
    API_log_no_res_content function transform a function for process and logging:

    Args:
        func (Callable)

    Returns:
        Any: unction result and logging(including its name, and status)
    """

    @functools.wraps(func)
    async def api_log_decorator(*args, **kwargs):
        # input_map = request.json()
        app_logger.info("%s request: start: %s", func.__name__, str(kwargs))
        try:
            response = await func(*args, **kwargs)
            if type(response) == ResponseModel:
                app_logger.info("%s request: finish: %s.\n", func.__name__, str(response.status_code))
            else:
                app_logger.info("%s request: finish.\n", func.__name__)
            return response
        except Exception as e:
            error_logger.error("%s request: error: %s.\n", func.__name__, e, exc_info=True)
            return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content=f"{func.__name__} request: error: {e}")
    return api_log_decorator


def api_log_aischema(func: Callable) -> Any:
    """
    API_log function transform a function for process and logging

    Args:
        func (Callable)

    Returns:
        Any: function result and logging(including its name, status, and data result)
    """

    @functools.wraps(func)
    async def api_log_decorator(*args, **kwargs):
        log_info = {}
        for key in kwargs["input_map"].__dir__():
            if str(key) in ["session", "texts"]:
                value = getattr(kwargs["input_map"], key)
                log_info[key] = value

        app_logger.info("%s request: start: %s", func.__name__, str(log_info))
        try:
            response = await func(*args, **kwargs)
            if type(response) == ResponseModel:
                app_logger.info("%s request: finish: %s, %s.\n", func.__name__, str(response.status_code), str(response.content))
            else:
                app_logger.info("%s request: finish: %s.\n", func.__name__, str(response))
            return response
        except Exception as e:
            error_logger.error("%s request: error: %s.\n", func.__name__, e, exc_info=True)
            return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content=f"{func.__name__} request: error: {e}")
    return api_log_decorator


def add_api() -> None:
    """
    Add_api function add specific API to FastAPI server:
    """

    if "application_api" not in sys.modules:
        import src.api_endpoint.application_api
    if "const_api" not in sys.modules:
        import src.api_endpoint.const_api
    if "sys_api" not in sys.modules:
        import src.api_endpoint.sys_api

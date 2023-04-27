import sys
import logging
from typing import Any, Callable

from src.const.global_map import METHOD_MAP, CONFIG_MAP


logger = logging.getLogger("utils_logger")


def register_load_method(func: Callable) -> Callable:
    if func.__name__ in METHOD_MAP:
        raise SyntaxError(f"Duplicate load method name: {func.__name__}")
    METHOD_MAP[func.__name__] = func

    return func


def load_single_resource(single_resource_name: str) -> Any:
    if "fastapi_resource" not in sys.modules:
        import src.utils.load_method.fastapi_resource
    if "common_resource" not in sys.modules:
        import src.utils.load_method.common_resource
    if "model_resource" not in sys.modules:
        import src.utils.load_method.model_resource

    # Load one resource using required method and provided info
    single_resource_info = CONFIG_MAP["resource"][single_resource_name]
    resource = None
    load_method = METHOD_MAP[single_resource_info["method"]]
    resource = load_method(**single_resource_info["args"])
    logger.info(f"{single_resource_name} loading success.")

    return resource

import json
import pickle
from typing import Any, Dict

from src.utils.load_method.load_utils import register_load_method


@register_load_method
def load_pickle_object(filename: str) -> Any:
    with open(filename, "rb") as f:
        return pickle.load(f)


@register_load_method
def load_json(filename: str) -> Dict[str, Any]:
    with open(filename, "r", encoding="utf-8") as f:
        parsed = json.load(f)

    return parsed


@register_load_method
def load_txt_list(filename: str) -> Dict[str, Any]:
    with open(filename, "r", encoding="UTF-8") as f:
        lines = f.readlines()
    content_list = [line.replace("\n", "") for line in lines]
    return content_list


@register_load_method
def load_whole_text_file(filename: str) -> str:
    with open(filename, "r", encoding="UTF-8") as f:
        text = f.read()
    return text


@register_load_method
def create_config_obj(**kwargs) -> Dict[str, Any]:
    return dict(**kwargs)

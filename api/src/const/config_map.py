import os

from src.const import const_map as CONST_MAP
from src.utils.load_method.common_resource import load_json


def load_all_config(CONFIG_SET: str, CONFIG_MAP: dict) -> None:
    for config_name in ["app", "resource", "logging"]:
        CONFIG_MAP[config_name] = load_json(f"config/common/{config_name}.json")

    for config_file_name in os.listdir(f"config/{CONFIG_SET}"):
        config_name = os.path.splitext(config_file_name)[0]
        if config_name == "const":
            load_const_map(f"config/{CONFIG_SET}/const.json")
        else:
            load_specific_config(f"config/{CONFIG_SET}/{config_file_name}", CONFIG_MAP[config_name])


def load_specific_config(config_file_path: str, config_map: dict) -> None:
    detail_config = load_json(config_file_path)
    for key in detail_config:
        config_map[key] = detail_config[key]


def load_const_map(config_file_path: str) -> None:
    detail_config = load_json(config_file_path)
    for key in detail_config:
        setattr(CONST_MAP, key, detail_config[key])

from src.utils.load_method import load_utils


def load_all_resource(CONFIG_MAP: dict, RESOURCE_MAP: dict) -> dict:
    for item in CONFIG_MAP["resource"]:
        RESOURCE_MAP[item] = load_utils.load_single_resource(item)
    return RESOURCE_MAP


def load_single_resource(resource_name: str, RESOURCE_MAP: dict) -> dict:
    RESOURCE_MAP[resource_name] = load_utils.load_single_resource(resource_name)
    return RESOURCE_MAP

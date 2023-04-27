from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

from src.utils.load_method.load_utils import register_load_method


@register_load_method
def fastapi_app() -> FastAPI:
    app = FastAPI(
        title="PB",
        description="FastAPI server for AI support SLearn web app.",
        version="1.0.0"
    )

    def custom_openapi():
        if app.openapi_schema:
            return app.openapi_schema

        openapi_schema = get_openapi(
            title="PB",
            version="1.0.0",
            description="FastAPI server for AI support SLearn web app.",
            routes=app.routes,
        )
        app.openapi_schema = openapi_schema
        return app.openapi_schema
    app.openapi = custom_openapi

    return app

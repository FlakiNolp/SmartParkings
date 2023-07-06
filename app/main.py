from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from routers import routers


app = FastAPI()
app.include_router(routers.router)

app.mount("/static", StaticFiles(directory="app/static"), name="static")
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization"],
)


@app.on_event("startup")
async def startup():
    pass


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8080)
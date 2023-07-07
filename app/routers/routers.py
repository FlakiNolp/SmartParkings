from fastapi import APIRouter, Request
from app.config import templates

router = APIRouter()


@router.get("/log-in")
async def log_in(request: Request):
    return templates.TemplateResponse("log-in.html", context={"request": request})


@router.get("/select-lot")
async def select_lot(request: Request):
    return templates.TemplateResponse("select-lot.html", context={"request": request})


@router.get("/select-slot")
async def select_slot(request: Request, id_value: int):
    return templates.TemplateResponse("select-slot.html", context={"request": request, "id_value": id_value})
from fastapi import APIRouter, Request
from app.config import templates

router = APIRouter()


@router.get("/log-in")
async def log_in(request: Request):
    return templates.TemplateResponse("login.html", context={"request": request})


@router.get("/sign-up")
async def sign_up(request: Request):
    return templates.TemplateResponse("sign-up.html", context={"request": request})


@router.get("/admin/personal-cabinet")
async def admin_personal_cabinet(request: Request):
    return templates.TemplateResponse("admin-personal-cabinet.html", context={"request": request})


@router.get("/guest/personal-cabinet")
async def guest_personal_cabinet(request: Request):
    return templates.TemplateResponse("guest-personal-cabinet", context={"request": request})


@router.get("/rent")
async def rent(request: Request):
    return templates.TemplateResponse("rent.html", context={"request": request})


@router.get("/admin/edit-zones")
async def edit_zones(request: Request):
    return templates.TemplateResponse("edit-zones.html", context={"request": request})


@router.get("/admin/edit-slots")
async def edit_slots(request: Request):
    return templates.TemplateResponse("edit-slots.html", context={"request": request})


@router.get("/admin/edit-lots")
async def edit_lots(request: Request):
    return templates.TemplateResponse("edit-lots.html", context={"request": request})


@router.post("/send-email")
async def send_email(token: str, ):
    return None

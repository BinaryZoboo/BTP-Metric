from fastapi import APIRouter, UploadFile, File, HTTPException
from models.schemas import MeasureResponse
from services.aruco_detector import detect_aruco

router = APIRouter()


@router.post("/measure", response_model=MeasureResponse)
async def measure(image: UploadFile = File(...)) -> MeasureResponse:
    if not image.content_type or not image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Le fichier doit être une image")

    image_bytes = await image.read()
    result = detect_aruco(image_bytes)
    return MeasureResponse(**result)

from pydantic import BaseModel
from typing import Optional


class MeasureResponse(BaseModel):
    marker_detected: bool
    scale_cm_per_px: Optional[float] = None
    marker_size_cm: Optional[float] = None
    marker_id: Optional[int] = None
    surface_m2: Optional[float] = None
    error: Optional[str] = None

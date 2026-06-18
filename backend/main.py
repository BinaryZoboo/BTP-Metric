from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import measure

app = FastAPI(title="BTP-Metric API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(measure.router, prefix="/api")


@app.get("/health")
def health():
    return {"status": "ok", "service": "BTP-Metric API"}

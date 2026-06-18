import cv2
import numpy as np

MARKER_REAL_SIZE_CM = 21.0  # Marqueur A4 en largeur


def detect_aruco(image_bytes: bytes) -> dict:
    """
    Détecte un marqueur ArUco dans l'image.
    Retourne l'échelle en cm/pixel si détecté.
    """
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    if img is None:
        return {"marker_detected": False, "error": "Image invalide ou format non supporté"}

    aruco_dict = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_4X4_50)
    parameters = cv2.aruco.DetectorParameters()
    detector = cv2.aruco.ArucoDetector(aruco_dict, parameters)

    corners, ids, _ = detector.detectMarkers(img)

    if ids is None or len(ids) == 0:
        return {"marker_detected": False}

    corner = corners[0][0]
    width_px = np.linalg.norm(corner[1] - corner[0])
    height_px = np.linalg.norm(corner[3] - corner[0])
    marker_px = (width_px + height_px) / 2

    scale = MARKER_REAL_SIZE_CM / marker_px  # cm par pixel

    return {
        "marker_detected": True,
        "scale_cm_per_px": round(scale, 6),
        "marker_size_cm": MARKER_REAL_SIZE_CM,
        "marker_id": int(ids[0][0]),
    }

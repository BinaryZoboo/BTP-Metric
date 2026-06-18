# BTP-Metric

Application mobile permettant à des artisans et particuliers du secteur BTP de mesurer des surfaces (sol, mur) ou des longueurs (clôture) à partir de photos prises sur chantier, puis d'estimer automatiquement les matériaux à acheter.

Le principe de mesure repose sur un **marqueur ArUco** (repère imprimé de dimensions connues) posé dans le champ de la photo. Le backend Python détecte ce marqueur, calcule l'échelle réelle, et en déduit les surfaces.

---

## Stack technique

| Couche | Technologie |
|--------|------------|
| Mobile | React Native + Expo (TypeScript) |
| Navigation | React Navigation v6 (Stack) |
| Fonts | Barlow + Barlow Condensed (Google Fonts via Expo) |
| Backend | Python 3.11 + FastAPI |
| Vision | OpenCV (détection ArUco) |
| HTTP | Axios (client), Uvicorn (serveur) |

---

## Lancement du backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows : venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

L'API est disponible sur `http://localhost:8000`.
Documentation Swagger : `http://localhost:8000/docs`

---

## Lancement du frontend

```bash
cd app
npm install
npx expo start
```

Scanner le QR code avec l'application **Expo Go** sur iOS ou Android.

---

## Écrans

| Écran | Description |
|-------|------------|
| `SplashScreen` | Écran de démarrage avec le logo BTP-Metric |
| `OnboardingScreen` | Présentation du principe de mesure avec marqueur ArUco |
| `ChoixMesureScreen` | Sélection du type de mesure : sol, mur ou clôture |
| `CameraScreen` | Prise de photo ou sélection depuis la galerie |
| `ResultatScreen` | Affichage du résultat de mesure et estimation des matériaux |

---

## Structure du repo

```
btpmetric/
├── README.md
├── .gitignore
├── mockups/               # Maquettes HTML statiques
│   ├── 01_splash.html
│   ├── 02_onboarding.html
│   ├── 03_choix_mesure.html
│   ├── 04_camera.html
│   └── 05_resultat.html
├── app/                   # Frontend React Native (Expo)
│   ├── package.json
│   ├── app.json
│   ├── App.tsx
│   └── src/
│       ├── screens/
│       ├── components/
│       ├── navigation/
│       ├── theme/
│       └── types/
└── backend/               # API Python FastAPI
    ├── requirements.txt
    ├── main.py
    ├── routers/
    ├── services/
    └── models/
```

---

## Conventions

### Nommage des fichiers
- Composants React : `PascalCase.tsx`
- Utilitaires / hooks : `camelCase.ts`
- Fichiers Python : `snake_case.py`

### Commits
- Messages en français
- Format : `type: description` (ex: `feat: écran caméra avec détection ArUco`)
- Types : `init`, `feat`, `fix`, `refactor`, `style`, `docs`, `chore`

### Branches
- Une branche par feature : `feature/nom-de-la-feature`
- Corrections : `fix/description-du-bug`

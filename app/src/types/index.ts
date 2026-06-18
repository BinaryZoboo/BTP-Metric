export type MesureType = 'sol' | 'mur' | 'cloture'

export interface MeasureResponse {
  marker_detected: boolean
  scale_cm_per_px?: number
  marker_size_cm?: number
  marker_id?: number
  surface_m2?: number
  error?: string
}

export type RootStackParamList = {
  Splash: undefined
  Onboarding: undefined
  ChoixMesure: undefined
  Camera: { mesureType: MesureType }
  Resultat: {
    mesureType: MesureType
    measureResult: MeasureResponse
    imageUri: string
  }
}

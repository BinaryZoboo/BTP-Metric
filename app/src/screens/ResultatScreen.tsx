import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import { colors, fonts, spacing, radius } from '../theme'

type Props = NativeStackScreenProps<RootStackParamList, 'Resultat'>

export default function ResultatScreen({ navigation, route }: Props) {
  const { mesureType, measureResult } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RÉSULTAT</Text>

      {measureResult.marker_detected ? (
        <View style={styles.resultCard}>
          <Text style={styles.label}>Type de mesure</Text>
          <Text style={styles.value}>{mesureType.toUpperCase()}</Text>

          {measureResult.surface_m2 != null && (
            <>
              <Text style={styles.label}>Surface calculée</Text>
              <Text style={styles.valueLarge}>
                {measureResult.surface_m2.toFixed(2)} m²
              </Text>
            </>
          )}

          <Text style={styles.label}>Échelle détectée</Text>
          <Text style={styles.value}>
            {measureResult.scale_cm_per_px?.toFixed(4)} cm/px
          </Text>

          <Text style={styles.label}>ID marqueur ArUco</Text>
          <Text style={styles.value}>#{measureResult.marker_id}</Text>
        </View>
      ) : (
        <View style={styles.errorCard}>
          <Text style={styles.errorText}>
            Marqueur ArUco non détecté.{'\n'}
            Assurez-vous que le marqueur est bien visible sur la photo.
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChoixMesure')}
      >
        <Text style={styles.buttonText}>Nouvelle mesure</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.noir,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl * 2,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 40,
    color: colors.orange,
    marginBottom: spacing.xl,
  },
  resultCard: {
    backgroundColor: colors.beton,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.sm,
  },
  label: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.gris,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: spacing.sm,
  },
  value: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 18,
    color: colors.blanc,
  },
  valueLarge: {
    fontFamily: fonts.display,
    fontSize: 48,
    color: colors.vert,
    lineHeight: 52,
  },
  errorCard: {
    backgroundColor: colors.beton,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderLeftWidth: 4,
    borderLeftColor: colors.gris,
  },
  errorText: {
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.ciment,
    lineHeight: 24,
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 16,
    color: colors.blanc,
  },
})

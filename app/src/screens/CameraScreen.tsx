import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList, MeasureResponse } from '../types'
import { colors, fonts, spacing, radius } from '../theme'

type Props = NativeStackScreenProps<RootStackParamList, 'Camera'>

export default function CameraScreen({ navigation, route }: Props) {
  const { mesureType } = route.params

  const handleSimulate = () => {
    const mockResult: MeasureResponse = {
      marker_detected: true,
      scale_cm_per_px: 0.052,
      marker_size_cm: 21.0,
      marker_id: 0,
      surface_m2: 12.4,
    }
    navigation.navigate('Resultat', {
      mesureType,
      measureResult: mockResult,
      imageUri: '',
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAMÉRA</Text>
      <Text style={styles.info}>
        Type de mesure :{' '}
        <Text style={styles.highlight}>{mesureType.toUpperCase()}</Text>
      </Text>
      <Text style={styles.instruction}>
        Posez le marqueur ArUco dans le champ de la photo, puis prenez la photo.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSimulate}>
        <Text style={styles.buttonText}>Suivant →</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.noir,
    paddingHorizontal: spacing.xl,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 40,
    color: colors.orange,
    marginBottom: spacing.lg,
  },
  info: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.gris,
    marginBottom: spacing.md,
  },
  highlight: {
    color: colors.orange,
    fontFamily: fonts.bodySemiBold,
  },
  instruction: {
    fontFamily: fonts.body,
    fontSize: 16,
    color: colors.ciment,
    lineHeight: 26,
    marginBottom: spacing.xxl,
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

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import { colors, fonts, spacing, radius } from '../theme'

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONBOARDING</Text>
      <Text style={styles.description}>
        Posez un marqueur ArUco (format A4) sur la surface à mesurer,
        prenez une photo, et BTP-Metric calcule automatiquement la surface réelle.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChoixMesure')}
      >
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
  description: {
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

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList, MesureType } from '../types'
import { colors, fonts, spacing, radius } from '../theme'

type Props = NativeStackScreenProps<RootStackParamList, 'ChoixMesure'>

const OPTIONS: { type: MesureType; label: string; description: string }[] = [
  { type: 'sol', label: 'SOL', description: 'Carrelage, parquet, béton…' },
  { type: 'mur', label: 'MUR', description: 'Peinture, enduit, faïence…' },
  { type: 'cloture', label: 'CLÔTURE', description: 'Longueur linéaire' },
]

export default function ChoixMesureScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHOIX MESURE</Text>
      <Text style={styles.subtitle}>Que voulez-vous mesurer ?</Text>

      {OPTIONS.map((opt) => (
        <TouchableOpacity
          key={opt.type}
          style={styles.option}
          onPress={() => navigation.navigate('Camera', { mesureType: opt.type })}
        >
          <Text style={styles.optionLabel}>{opt.label}</Text>
          <Text style={styles.optionDesc}>{opt.description}</Text>
        </TouchableOpacity>
      ))}
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
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 16,
    color: colors.ciment,
    marginBottom: spacing.xl,
  },
  option: {
    backgroundColor: colors.beton,
    padding: spacing.lg,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.orange,
  },
  optionLabel: {
    fontFamily: fonts.displayBold,
    fontSize: 24,
    color: colors.blanc,
    marginBottom: spacing.xs,
  },
  optionDesc: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.gris,
  },
})

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import ChoixMesureScreen from '../screens/ChoixMesureScreen'
import CameraScreen from '../screens/CameraScreen'
import ResultatScreen from '../screens/ResultatScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="ChoixMesure" component={ChoixMesureScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Resultat" component={ResultatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

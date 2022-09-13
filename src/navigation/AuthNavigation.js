import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, LoginEmailScreen, RegisterEmailScreen } from '../screens/Auth'
import { getDefaultNavigationTheme, screens } from '../utils';
import { useTheme } from '../hooks';


const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  const { theme } = useTheme()
  const MyTheme = getDefaultNavigationTheme(theme)

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={
          {
            headerTransparent: true,
          }
        }>
        <Stack.Screen name={screens.authScreens.auth} component={AuthScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name={screens.authScreens.loginEmail} component={LoginEmailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name={screens.authScreens.registerEmail} component={RegisterEmailScreen}
          options={{
             headerShown: true,
              headerTitleAlign: 'center'
             }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
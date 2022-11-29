import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from '../hooks';
import { AuthScreen, LoginEmailScreen, RegisterEmailScreen } from '../screens/Auth';
import { getDefaultNavigationTheme, screens } from '../utils';


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
        }

      >
        <Stack.Screen name={screens.authScreens.auth} component={AuthScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name={screens.authScreens.loginEmail} component={LoginEmailScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center'
          }}
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
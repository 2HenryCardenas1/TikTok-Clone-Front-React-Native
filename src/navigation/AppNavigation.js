import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { useTheme } from '../hooks'
import { FollowedsScreen, FollowersScreen, UserScreen, VideoScreen, VideosFavoritesScreen, VideosPublishedScreen } from '../screens/Shared'
import { getDefaultNavigationTheme, screens } from '../utils'
import { TabNavigation } from './TabNavigation'

const Stack = createNativeStackNavigator()

//Controlled all the screens in the app
export function AppNavigation() {
  const { theme } = useTheme()
  const MyTheme = getDefaultNavigationTheme(theme)
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator >
        <Stack.Screen name={screens.app.tab} component={TabNavigation} options={{
          headerShown: false
        }
        } />

        <Stack.Screen name={screens.app.user} component={UserScreen} options={{
          headerTitleAlign: "center",
        }} />
        <Stack.Screen name={screens.app.video} component={VideoScreen} options={{
          title: "",
          headerTransparent: true,
        }} />
        <Stack.Screen name={screens.app.videosPublished} component={VideosPublishedScreen} options={{
          title: "",
          headerTransparent: true,
        }} />
        <Stack.Screen name={screens.app.videosFavorites} component={VideosFavoritesScreen} options={{
          title: "",
          headerTransparent: true,
        }} />

        <Stack.Group screenOptions={{ presentation: "modal", animation: 'slide_from_bottom' }}>
          <Stack.Screen name={screens.app.followers} component={FollowersScreen} options={{

            headerShown: false
          }} />
          <Stack.Screen name={screens.app.followed} component={FollowedsScreen} options={{
            headerShown: false
          }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
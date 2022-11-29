import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NotificationsScreen } from '../../screens/Notifications'
import { screens } from '../../utils'
const Stack = createNativeStackNavigator()

export function NotificationsStack() {

    const screenOptions = {
        headerShown: false
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.notification.notification} component={NotificationsScreen} options={
                {
                    title: "Notifications"
                }
            } />
        </Stack.Navigator>
    )
}
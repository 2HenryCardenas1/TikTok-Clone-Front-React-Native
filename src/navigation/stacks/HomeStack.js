import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeScreen } from '../../screens/Home'
import { screens } from '../../utils'


const Stack = createNativeStackNavigator()

export function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.home.home} component={HomeScreen} options={{
                headerShown: false,

            }} />
        </Stack.Navigator>
    )
}
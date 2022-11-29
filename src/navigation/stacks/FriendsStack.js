import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { FriendsScreen } from '../../screens/Friends'
import { screens } from '../../utils'


const Stack = createNativeStackNavigator()

export function FriendsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.friends.friends} component={FriendsScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
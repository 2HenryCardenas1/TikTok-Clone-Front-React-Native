import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { PublishVideoScreen, UploadsScreen } from '../../screens/Uploads'
import { screens } from '../../utils'

const Stack = createNativeStackNavigator()

export function UploadsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.uploads.uploads} component={UploadsScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={screens.uploads.publishVideo} component={PublishVideoScreen} options={{
                title: "Publish Video"
            }} />
        </Stack.Navigator>
    )
}
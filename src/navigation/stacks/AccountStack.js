import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AccountScreen, ChangeDescriptionScreen, ChangeInstagram, ChangeNameScreen, ChangeWebSiteScreen, SettingsScreen } from '../../screens/Account'
import { screens } from '../../utils'

const Stack = createNativeStackNavigator()
export function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.account.account} component={AccountScreen} options={{
                headerTitleAlign: "center",

            }} />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name={screens.account.settings} component={SettingsScreen} options={{
                    title: "Settings"
                }} />
                <Stack.Screen name={screens.account.changeName} component={ChangeNameScreen} options={{
                    title: "Name"
                }} />
                <Stack.Screen name={screens.account.changeDescription} component={ChangeDescriptionScreen} options={{
                    title: "Description"
                }} />
                <Stack.Screen name={screens.account.changeWebSite} component={ChangeWebSiteScreen} options={{
                    title: "Web Site"
                }} />
                <Stack.Screen name={screens.account.changeInstagram} component={ChangeInstagram} options={{
                    title: "Instagram"
                }} />

            </Stack.Group>
        </Stack.Navigator>
    )
}
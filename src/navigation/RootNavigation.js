import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react'
import { useTheme } from '../hooks'
import {AuthNavigation} from './AuthNavigation'
import {AppNavigation} from './AppNavigation'

export function RootNavigation() {
    const { darkMode } = useTheme()
    const auth = null;
    return (
        <>
            <StatusBar
                animated
                backgroundColor={darkMode ? '#121212' : '#fff'}
                barStyle={darkMode ? "light-content" : "dark-content"}
            />
            
            {auth ? <AppNavigation/> : <AuthNavigation/>}
        </>
    )
}

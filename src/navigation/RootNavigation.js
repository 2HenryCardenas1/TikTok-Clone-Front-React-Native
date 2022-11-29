import React from 'react';
import { StatusBar } from 'react-native';
import { useAuth, useTheme } from '../hooks';
import { AppNavigation } from './AppNavigation';
import { AuthNavigation } from './AuthNavigation';

export function RootNavigation() {
    const { darkMode } = useTheme()
    const { auth } = useAuth();

    return (
        <>
            <StatusBar
                animated
                backgroundColor={darkMode ? '#121212' : '#fff'}
                barStyle={darkMode ? "light-content" : "dark-content"}
            />

            {auth ? <AppNavigation /> : <AuthNavigation />}
        </>
    )
}

import React, { useState, useEffect, createContext } from 'react'
import { ThemeProvider as Theme } from 'react-native-elements'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme } from './LightTheme'
import { darkTheme } from './DarkTheme'


export const ThemeContext = createContext({
    darkMode: true,
    toogleTheme: () => null,
    theme: {}
});

export function ThemeProvider(props) {
    const { children } = props
    const [darkMode, setDarkMode] = useState(true)

    //When the app starts, we check if the user has a theme preference

    useEffect(() => {
        (async () => {
            const response = await AsyncStorage.getItem('theme');
            if (response) setDarkMode(JSON.parse(response));
        })()
    }, [])

    //When the user changes the theme, 
    //we save the preference in the storage
    const toogleTheme = async () => {
        setDarkMode(!darkMode);
        //Save the value in the storage, theme is a key
        await AsyncStorage.setItem("theme", JSON.stringify(!darkMode))
    }

    const data = {
        darkMode,
        toogleTheme,
        theme: darkMode ? darkTheme : lightTheme,
    }
    
    return (
        <ThemeContext.Provider value={data} >
            {/*children is the content of the component (Rootnavigation)*/}
            <Theme theme={darkMode ? darkTheme : lightTheme}>{children}</Theme>
        </ThemeContext.Provider>
    )
}


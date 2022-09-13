import { DefaultTheme } from '@react-navigation/native'

export const getDefaultNavigationTheme = (theme) => {
    return {
        colors: {
            ...DefaultTheme,
            background: theme.Default.background,
            card : theme.Default.background,
            text : theme.Text.style.color,
        }
    }
}


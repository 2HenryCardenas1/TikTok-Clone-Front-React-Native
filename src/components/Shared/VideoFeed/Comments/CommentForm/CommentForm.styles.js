import { StyleSheet } from "react-native";
import { useTheme } from '../../../../../hooks';

export function styled() {
    const { theme } = useTheme()
    return StyleSheet.create({
        content: {
            backgroundColor: theme.Default.backgroundSecondary,
            bottom: 0,
            left: 0,
            width: '100%',
            height: 80,
            paddingTop: 10,
        },
        container: {
            backgroundColor: theme.BackgroundContainer.style.backgroundColor,
            borderBottomWidth: 0,
            borderRadius: 8,
            paddingHorizontal: 5,

        },
        input: {
            fontSize: 14,
        }


    })
}
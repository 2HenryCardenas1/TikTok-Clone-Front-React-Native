import { Platform, StyleSheet } from "react-native"
import {useTheme} from '../../../hooks'

export const styles = () => {
    const {theme} = useTheme()
    return StyleSheet.create({
        content: {
            height : '100%',
            justifyContent : 'space-between',
            marginHorizontal:15
        },
        form : {
            marginTop: Platform.OS === 'ios' ? 20 : 80,
        },
        registerButtom : {
            marginBottom: Platform.OS === 'ios' ? 20 : 60,
        }

    })
}
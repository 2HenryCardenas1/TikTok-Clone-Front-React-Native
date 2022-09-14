import {StyleSheet,Platform} from 'react-native';
import {useTheme} from '../../../hooks';


export const styles = () => {
    const {theme} = useTheme();
    return StyleSheet.create({
        content: {
            height:"100%",
            justifyContent: 'space-between',
            marginHorizontal:15           
        },
        form : {
            marginTop: Platform.OS === 'ios' ? 20 : 70,
        },
        buttonContainer : {
            marginBottom : 50
        }
    })
}
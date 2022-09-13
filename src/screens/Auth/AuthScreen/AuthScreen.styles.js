import { StyleSheet } from "react-native";
import { useTheme } from '../../../hooks'


//convertimos los estilos a una funcion para el uso del hook useTheme
export const styles = () => {

    const {theme} = useTheme()
   
    return StyleSheet.create({
            content: {
               height : '100%',
               justifyContent : 'space-between'
            },
            optionsContent : {
                marginHorizontal : 20
            },
            title : {
                fontSize : 20,
                fontWeight : 'bold',
                color : theme.Text.style.color,
                textAlign: 'center',
                marginTop : 50
            },
            textDescription : {
               
                color : theme.Text.style.color,
                textAlign: 'center',
                marginTop : 15
            },
            itemRegister : {
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'space-between',
                borderWidth : 1,
                borderColor : theme.Default.border,
                paddingHorizontal : 20,
                paddingVertical : 10,
                marginTop : 30,
                borderRadius:5
            },
            loginContent : {
                backgroundColor : theme.Default.backgroundSecondary,
                alignItems : 'center',
                paddingVertical:20
            },
            login: {
                color : "#2185d0",
                fontWeight : 'bold'
            }
        })
    
}
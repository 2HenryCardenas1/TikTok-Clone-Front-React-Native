import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Icon, Text } from 'react-native-elements'
import { useTheme } from '../../../hooks'
import { screens } from '../../../utils'
import { styles } from './AuthScreen.styles'


export function AuthScreen(props) {
  const { navigation } = props
  const style = styles();

  const goToRegisterEmail = () => {
    navigation.navigate(screens.authScreens.registerEmail)
  }

  const goToLoginEmail = () => {
    navigation.navigate(screens.authScreens.loginEmail)
  }

  return (
    <SafeAreaView style={style.content}>
      <View style={style.optionsContent}>
        <Text style={style.title}>Registrate en TikToke-Clone</Text>
        <Text style={style.textDescription}>
          Crea un perfil, sigue a tus amigos, mira sus videos y comparte los tuyos.
        </Text>
        <TouchableOpacity onPress={goToRegisterEmail}
          style={style.itemRegister}>
          <Icon type='material-community' name='at' />
          <Text>Usar correo electronico</Text>
          <View></View>
        </TouchableOpacity>

      </View>
      <View style={style.loginContent}>
        <Text>
          ¿Ya tienes una cuenta?{' '}
          <Text style={style.login} onPress={goToLoginEmail}>
            Iniciar sesion
          </Text>
        </Text>

      </View>
    </SafeAreaView>
  )
}
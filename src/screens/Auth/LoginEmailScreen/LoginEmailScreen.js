import { View, SafeAreaView,Alert} from 'react-native'
import React, { useState } from 'react'
import { Text, Input, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import { styles } from './LoginEmailScreen.styles'
import { initialValues, validationSchema } from './LoginEmailScreen.dataValidate'
import {Auth} from'../../../api'
import {useAuth} from '../../../hooks'
const auth = new Auth()

export function LoginEmailScreen() {
  const style = styles()
  const [showPassword, setShowPassword] = useState(false)
  const {login} = useAuth()
  const onShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  const createAlert = (error) =>{
    Alert.alert(
      "Error",
      `${error.detail}`,
      [
        { text: "Intentar de nuevo"}
      ]
    )
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const response = await auth.login(formData)
        login(response)
      } catch (error) {
        createAlert(error)
        console.log(error)
      }
    }
  })

 

  return (
    <SafeAreaView style={style.content}>
      <View style={style.form}>
        <Input placeholder='Correo electronico'
         autoCapitalize='none'
         onChangeText={text => formik.setFieldValue('email', text)}
         errorMessage={formik.errors.email}
         />
        <Input placeholder='Contraseña'
          secureTextEntry={!showPassword}
          rightIcon={{
            type: 'material-community',
            name: showPassword ? 'eye-off-outline' : 'eye-outline',
            onPress: onShowPassword
          }}
          onChangeText={text => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}

        />
      </View>
      <Button title='Iniciar sesion'
       containerStyle={style.buttonContainer}
       onPress={formik.handleSubmit}
       loading={formik.isSubmitting}
       />
    </SafeAreaView>
  )
}
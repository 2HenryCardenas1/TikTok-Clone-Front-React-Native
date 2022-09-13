import { SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button, Text } from 'react-native-elements'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './RegisterEmail.dataValidate'
import { styles } from './RegisterEmail.styles'
import {Auth} from '../../../api'


//Initialise the Auth class
const auth = new Auth()

export function RegisterEmailScreen(props) {
  const { navigation } = props

  const style = styles()

  const [showPassword, setShowPassword] = useState(false)

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  //Using Formik
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await auth.register(formData)
        navigation.goBack()
      } catch (error) {
        console.log(error)
      }
    }
  })


  return (
    <SafeAreaView style={style.content}>
      <View style={style.form}>
        <Input label='Correo Electronico' autoCapitalize='none'
          onChangeText={(text) => formik.setFieldValue('email', text.toLowerCase())}
          errorMessage={formik.errors.email}
        />

        <Input label='Nombre' autoCapitalize='none'
          onChangeText={(text) => formik.setFieldValue('first_name', text)}
          errorMessage={formik.errors.first_name} />

        <Input label='Apellido' autoCapitalize='none'
          onChangeText={(text) => formik.setFieldValue('last_name', text)}
          errorMessage={formik.errors.last_name} />

        <Input label='Username' utoCapitalize='none'
          onChangeText={(text) => formik.setFieldValue('username', text)}
          errorMessage={formik.errors.username} />

        <Input label='Contarseña'
          secureTextEntry={!showPassword}

          rightIcon={{
            type: 'material-community',
            name: showPassword ? 'eye-off-outline' : 'eye-outline',
            onPress: onShowPassword
          }}

          onChangeText={(text) => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}

        />
        <Input label='Repetir Contarseña'
          secureTextEntry={!showPassword}
          rightIcon={{
            type: 'material-community',
            name: showPassword ? 'eye-off-outline' : 'eye-outline',
            onPress: onShowPassword
          }}
          onChangeText={(text) => formik.setFieldValue('password_confirmation', text)}
          errorMessage={formik.errors.password_confirmation}

        />


      </View>
      <Button title='Registrarse'
        containerStyle={style.registerButtom}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </SafeAreaView>
  )
}


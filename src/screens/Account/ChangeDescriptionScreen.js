import { useFormik } from 'formik'
import React from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import * as Yup from 'yup'
import { User } from '../../api'
import { useAuth } from '../../hooks'

const userApi = new User()
export function ChangeDescriptionScreen(props) {

    const {
        route: { params },
        navigation
    } = props

    const { accessToken } = useAuth()

    const formik = useFormik({
        initialValues: {
            description: params.description
        },
        validationSchema: Yup.object({
            description: Yup.string().required('Description is required'),
        }),
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                await userApi.updateUser(accessToken, {
                    description: values.description
                })

                navigation.goBack()
            } catch (error) {
                console.error(error)
            }
        }
    })


    return (
        <View style={{
            marginHorizontal: 20,
        }}>
            <Input
                placeholder='Description'
                autoCapitalize='none'
                multiline
                inputStyle={{
                    height: 100,
                }}
                value={formik.values.description}
                onChangeText={(text) => formik.setFieldValue('description', text)}
                errorMessage={formik.errors.description}
            />

            <Button

                title='Save'
                style={{
                    marginTop: 10,
                }}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}
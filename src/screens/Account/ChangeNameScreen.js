import { useFormik } from 'formik'
import React from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import * as Yup from 'yup'
import { User } from '../../api'
import { useAuth } from '../../hooks'

const userApi = new User()
export function ChangeNameScreen(props) {
    const { route: { params }, navigation } = props
    const { accessToken } = useAuth()

    const formik = useFormik({
        initialValues: {
            name: params.name
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
        }),
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                await userApi.updateUser(accessToken, {
                    first_name: values.name
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
                placeholder='Name'
                autoCapitalize='none'
                value={formik.values.name}
                onChangeText={(text) => formik.setFieldValue('name', text)}
                errorMessage={formik.errors.name}
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
import { useFormik } from 'formik'
import React from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import * as Yup from 'yup'
import { User } from '../../api'
import { useAuth } from '../../hooks'
const userApi = new User()
export function ChangeInstagram(props) {
    const { route: { params }, navigation } = props

    const { accessToken } = useAuth()

    const formik = useFormik({
        initialValues: {
            instagram: params.instagram
        },
        validationSchema: Yup.object({
            instagram: Yup.string().required('Instagram is required'),
        }),
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                await userApi.updateUser(accessToken, {
                    instagram: values.instagram
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
                placeholder='Instagram'
                autoCapitalize='none'
                value={formik.values.instagram}
                onChangeText={(text) => formik.setFieldValue('instagram', text)}
                errorMessage={formik.errors.instagram}

            />

            <Button
                title={'Save'}
                style={{
                    marginTop: 20,
                }}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}

            />
        </View>
    )
}
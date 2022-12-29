import { useFormik } from 'formik'
import React from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import * as Yup from 'yup'
import { User } from '../../api'
import { useAuth } from '../../hooks'

const userApi = new User()
export function ChangeWebSiteScreen(props) {
    const { route: { params }, navigation } = props

    const { accessToken } = useAuth()

    const formik = useFormik({
        initialValues: {
            website: params.website
        },
        validationSchema: Yup.object({
            website: Yup.string().required('WebSite is required'),
        }),
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                await userApi.updateUser(accessToken, {
                    website: values.website
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
                placeholder='WebSite'
                autoCapitalize='none'
                multiline
                inputStyle={{
                    height: 100,
                }}
                value={formik.values.website}
                onChangeText={(text) => formik.setFieldValue('website', text)}
                errorMessage={formik.errors.website}

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
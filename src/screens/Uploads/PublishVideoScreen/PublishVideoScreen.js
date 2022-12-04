import { useFormik } from 'formik'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { Video } from '../../../api'
import { VideoData } from '../../../components/PublishVideo/'
import { useAuth } from '../../../hooks'
import { screens } from '../../../utils'
import { initialValues, validationSchema } from './PublishVideoScreen.data'
import { styles } from './PublishVideoScreen.styles'

const videoApi = new Video()
export function PublishVideoScreen(props) {

    const { navigation, route: { params } } = props
    const { accessToken, auth } = useAuth()
    const formik = useFormik({
        initialValues: initialValues(params.videoUri),
        validationSchema: validationSchema(),
        onSubmit: async (values) => {
            try {
                await videoApi.createVideo(accessToken, values, auth.user_id)
                navigation.reset({
                    index: 0,
                    routes: [{ name: screens.home.tab }]
                })
            } catch (error) {
                console.error("Err", error)
            }
        }
    })



    return (
        <View style={styles.content}>
            <VideoData formik={formik} />
            <View style={styles.viewSubmit}>
                <Button
                    title="Publish"
                    onPress={formik.handleSubmit}
                    loading={formik.isSubmitting}
                />
            </View>
        </View>
    )
}
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { map, size } from 'lodash'
import React, { useCallback, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Image, Text } from 'react-native-elements'
import { Video } from '../../../api'
import { useAuth } from '../../../hooks'
import { screens } from '../../../utils'
import { styles } from './VideosFavorites.styles'

const videoApi = new Video()
export function VideosFavorites(props) {
    const { idUser } = props
    const { accessToken } = useAuth()
    const [videos, setVideos] = useState(null)

    const navigation = useNavigation()
    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const response = await videoApi.getFavoriteVideos(accessToken, idUser)
                    setVideos(response)
                } catch (error) {
                    console.error(error)
                }
            })()
        }, [])
    )
    if (!videos) return null

    const goToVideo = (idVideo) => {
        navigation.navigate(screens.app.videosFavorites, { idVideo: idVideo.id, idUser })
    }
    return (
        <View style={styles.content}>

            {map(videos, (video, index) => (
                <Pressable key={index} style={styles.videoBlock} onPress={() => goToVideo(video)}>
                    <Image source={{ uri: video.video_data.image }} style={styles.image} />
                </Pressable>
            ))}

            {size(videos) === 0 && (
                <View style={styles.noVideos}>
                    <Text>You don`t have favorite videos</Text>
                </View>
            )}
        </View>
    )
}
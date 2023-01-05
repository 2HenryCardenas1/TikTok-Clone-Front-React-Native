import { useNavigation } from '@react-navigation/native'
import { map, size } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Image, Text } from 'react-native-elements'
import { Video } from '../../../api'
import { useAuth } from '../../../hooks'
import { screens } from '../../../utils'
import { styles } from './Videos.styles'

const videoApi = new Video()
export function Videos(props) {
    const { idUser } = props
    const { auth, accessToken } = useAuth()

    const [videos, setVideos] = useState(null)
    const navigation = useNavigation()

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await videoApi.getVideoUser(accessToken, idUser)
                    setVideos(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [idUser])

    if (!videos) return null

    const goToVideo = (video) => {
        navigation.navigate(screens.app.videosPublished, { idUser, idVideo: video.id })
    }
    return (
        <View style={styles.content}>

            {map(videos, (video, index) => (
                <Pressable key={index} style={styles.videoBlock} onPress={() => goToVideo(video)}>
                    <Image source={{ uri: video.image }} style={styles.image} />
                </Pressable>
            ))
            }

            {size(videos) === 0 && (
                <View style={styles.noVideos}>
                    <Text>You have no videos published</Text>
                </View>
            )
            }
        </View>
    )
}
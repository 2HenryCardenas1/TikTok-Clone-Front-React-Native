import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { Video } from '../../api'
import { VideoFeed } from '../../components/Shared'
import { useAuth } from '../../hooks'
const videoApi = new Video()
const { height } = Dimensions.get('window')
export function VideoScreen(props) {
    const { route: { params } } = props
    const [video, setVideo] = useState(null)
    const { accessToken } = useAuth()


    useEffect(() => {
        (
            async () => {
                try {
                    const response = await videoApi.getVideoById(accessToken, params.idVideo)
                    setVideo(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [params])

    if (!video) return null
    return (
        <VideoFeed item={video} index={1} indexShow={1} style={{ height: height }} />
    )
}
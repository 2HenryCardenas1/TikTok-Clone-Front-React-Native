import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'
import { Video } from '../../api'
import { VideoFeed } from '../../components/Shared'
import { useAuth } from '../../hooks'
import { ENV } from '../../utils'

const videoApi = new Video()
const { height } = Dimensions.get('window')


export function ForYouVideos() {

    const [videos, setVideos] = useState(null)
    const { accessToken } = useAuth()

    useEffect(() => {
        if (accessToken) {
            (async () => {
                try {
                    const response = await videoApi.getAllVideos(accessToken)
                    setVideos(response)
                } catch (error) {
                    console.error(error)
                }
            })()
        }
    }, [accessToken])

    if (!videos) return null

    return (
        <FlatList
            data={videos}
            decelerationRate="fast"
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
                <VideoFeed index={index} item={item} />)}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={height - ENV.TAB_MENU_HEIGHT}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50,
            }}

            onScrollToIndexFailed={() => { }}
        />
    )
}
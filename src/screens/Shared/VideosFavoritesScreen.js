import { forEach } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'
import { Video } from '../../api'
import { VideoFeed } from '../../components/Shared'
import { useAuth } from '../../hooks'
const videoApi = new Video()
const { height } = Dimensions.get('window')
export function VideosFavoritesScreen(props) {
    const { route: { params } } = props


    const [videos, setVideos] = useState(null)
    const { accessToken } = useAuth()
    const [indexStart, setIndexStart] = useState(null)

    useEffect(() => {
        (
            async () => {

                try {
                    const response = await videoApi.getFavoriteVideos(accessToken, params.idUser)
                    setVideos(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [params])

    useEffect(() => {
        if (videos) {
            forEach(videos, (video, index) => {
                if (video.video_data.id === params.idVideo) {
                    setIndexStart(index)
                }
            })
        }
    }, [params, videos])


    const onViewChangeRef = useRef(({ viewableItems }) => {

        setIndexStart(viewableItems[0].index)
    })

    if (!videos || indexStart === null) return null

    return (
        <FlatList
            data={videos}
            decelerationRate="fast"
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (<VideoFeed style={{ height: height }} item={item.video_data} index={index} indexShow={indexStart} />)}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={height}
            onViewableItemsChanged={onViewChangeRef.current}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            initialScrollIndex={indexStart}
            onScrollToIndexFailed={() => { }}
        />
    )
}
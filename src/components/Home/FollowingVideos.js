import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'
import { Text } from 'react-native-elements'
import { Video } from '../../api'
import { VideoFeed } from '../../components/Shared'
import { useAuth } from '../../hooks'
import { ENV } from '../../utils'
const videoApi = new Video()
const { height } = Dimensions.get('window')
export function FollowingVideos() {
    const [videos, setVideos] = useState(null)
    const [indexStart, setIndexStart] = useState(null)
    const { accessToken } = useAuth()

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await videoApi.getFollowingsVideos(accessToken)
                    setVideos(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [])

    const onViewChangeRef = useRef(({ viewableItems }) => {
        setIndexStart(viewableItems[0].index)
    })


    if (!videos) return null


    return (
        <FlatList
            data={videos}
            decelerationRate="fast"
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
                <VideoFeed index={index} item={item} indexShow={indexStart} />)}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={height - ENV.TAB_MENU_HEIGHT}
            onViewableItemsChanged={onViewChangeRef.current}
            initialScrollIndex={indexStart}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50,
            }}
            ListEmptyComponent={<Text style={
                {
                    textAlign: "center",
                    marginTop: height / 2 - 10,


                }
            }>You don't follow any user, follow your first user !</Text>}


            onScrollToIndexFailed={() => { }}
        />
    )
}
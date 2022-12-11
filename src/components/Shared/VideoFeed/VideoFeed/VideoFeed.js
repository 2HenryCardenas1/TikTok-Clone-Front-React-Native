import { useFocusEffect } from '@react-navigation/native'
import { Video } from 'expo-av'
import React, { useCallback, useRef, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Info } from './Info'
import { Profile } from './Profile'
import { TimeLine } from './TimeLine'
import { styles } from './VideoFeed.styles'

export function VideoFeed(props) {
    const { item, index, indexShow, style } = props
    const video = useRef(null)
    const [isStarted, setIsStarted] = useState(false)
    const [videoStatus, setVideoStatus] = useState(null)
    const user = item.user_data
    const startPauseVideo = () => {
        setIsStarted(!isStarted)
    }
    useFocusEffect(
        useCallback(() => {
            setIsStarted(index === indexShow)

            return () => {
                setIsStarted(false)
            }
        }, [index, indexShow])
    )

    return (
        <Pressable style={[styles.container, style]} onPress={startPauseVideo}>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: item.video }}
                resizeMode="cover"
                isLooping
                shouldPlay={isStarted}
                onPlaybackStatusUpdate={(status) => setVideoStatus(status)}

            />
            <View style={styles.blockContent}>
                <View style={styles.blockLeft}>
                    <Info username={user.username} description={item.description} />
                </View>
                <View style={styles.blockRight}>
                    <Profile idUser={item.user} image={user.avatar} />
                </View>

            </View>
            {videoStatus && <TimeLine videoStatus={videoStatus} />}
        </Pressable>
    )
}
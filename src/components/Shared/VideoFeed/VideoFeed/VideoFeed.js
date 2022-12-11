import { Video } from 'expo-av'
import React, { useRef, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Text } from 'react-native-elements'
import { styles } from './VideoFeed.styles'

export function VideoFeed(props) {
    const { item, index } = props
    const video = useRef(null)
    const [isStarted, setIsStarted] = useState(false)
    const startPauseVideo = () => {
        setIsStarted(!isStarted)
    }
    return (
        <Pressable style={styles.container} onPress={startPauseVideo}>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: item.video }}
                resizeMode="cover"
                isLooping
                shouldPlay={isStarted}

            />
            <View style={styles.blockContent}>
                <View style={styles.blockLeft}>
                    <Text>{item.user_data.username}</Text>
                    <Text>{item.description}</Text>
                </View>
                <View style={styles.blockRight}>
                    <Text>Right</Text>
                </View>

            </View>

        </Pressable>
    )
}
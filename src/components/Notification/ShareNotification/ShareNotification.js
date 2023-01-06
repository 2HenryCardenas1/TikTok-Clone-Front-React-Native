import { useNavigation } from '@react-navigation/native'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { Avatar, Image, Text } from 'react-native-elements'
import { LOGO } from '../../../../assets/images'
import { screens } from '../../../utils'
import { styles } from './ShareNotification.styles'

export function ShareNotification(props) {
    const { notification, readNotification } = props
    const userFollower = notification.user_follower_data
    const video = notification.video_data
    const [isRead, setRead] = useState(notification.read)

    const navigation = useNavigation()
    const onReadNotification = () => {
        readNotification(notification.id, setRead)
    }

    const goToVideo = () => {
        navigation.navigate(screens.app.video, { idVideo: video.id })
    }

    return (
        <Pressable style={[styles.content, isRead && styles.inactive]} onLongPress={!isRead ? onReadNotification : null}
            onPress={goToVideo}
        >
            <View style={styles.leftContent}>
                <Avatar
                    source={userFollower.avatar ? { uri: userFollower.avatar } : LOGO}
                    rounded
                    size={40}
                    style={styles.avatar}
                />
                <View style={styles.contentInfo}>
                    <Text style={styles.user}> {userFollower.username}</Text>
                    <Text style={styles.text} numberOfLines={3}> share your post</Text>
                    <Text style={styles.time}>{DateTime.fromISO(notification.created_at)
                        .setLocale("es").minus({ days: 1 }).toRelative()
                    }</Text>
                </View>
            </View>

            <Image source={{ uri: video.image }}
                style={styles.imgVideo}
            />

        </Pressable>
    )
}
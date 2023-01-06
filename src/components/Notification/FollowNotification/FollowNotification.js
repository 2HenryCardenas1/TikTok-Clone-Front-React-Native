import { useNavigation } from '@react-navigation/native'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { LOGO } from '../../../../assets/images'
import { screens } from '../../../utils'
import { styles } from './FollowNotification.styles'
export function FollowNotification(props) {
    const { notification, readNotification } = props
    const userFollower = notification.user_follower_data
    const [isRead, setIsRead] = useState(notification.read)
    const navigation = useNavigation()

    const goToProfile = () => {
        navigation.navigate(screens.app.user, { idUser: userFollower.id })

    }

    const onReadNotification = () => {
        readNotification(notification.id, setIsRead)
    }
    return (
        <Pressable style={[styles.content, isRead && styles.inactive]}
            onPress={goToProfile}
            onLongPress={!isRead ? onReadNotification : null}
        >
            <View style={styles.contentLeft}>

                <Avatar
                    source={userFollower.avatar ? { uri: userFollower.avatar } : LOGO}
                    rounded
                    size={40}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.user}>{userFollower.username}</Text>
                    <Text style={styles.text}>start followed</Text>
                    <Text style={styles.time}>{DateTime.fromISO(notification.created_at).setLocale("es").minus({ days: 1 }).toRelative()}</Text>
                </View>


            </View>
        </Pressable>
    )
}
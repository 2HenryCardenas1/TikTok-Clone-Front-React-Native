import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { LOGO } from '../../../../../assets/images'
import { Follow, Notification } from '../../../../api'
import { useAuth } from '../../../../hooks'
import { ENV, screens } from '../../../../utils'
import { styles } from './Profile.styles'

const followApi = new Follow()
const notificationApi = new Notification()

export function Profile(props) {

    const { idUser, image } = props
    const [isFollowing, setIsFollowing] = useState(true)
    const { auth, accessToken } = useAuth()
    const { name } = useRoute()
    const navigation = useNavigation()
    const isMyVideo = idUser === auth.user_id


    const goToProfile = () => {
        if (isMyVideo && name === screens.home.home) {
            navigation.navigate(screens.account.tab, { screen: screens.account.account })
        } else {
            navigation.navigate(screens.app.user, { idUser })
        }
    }
    const followUser = async () => {
        try {
            await followApi.follow(accessToken, auth.user_id, idUser)
            await notificationApi.create({
                token: accessToken,
                idTargetUser: idUser,
                idUserFollower: auth.user_id,
                typeNotification: ENV.TYPE_NOTIFICATION.FOLLOW
            })
            setIsFollowing(true)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        (
            async () => {
                try {
                    const response = await followApi.followUser(accessToken, auth.user_id, idUser)

                    setIsFollowing(response)

                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [])


    return (
        <View style={styles.content}>
            <Avatar
                rounded
                source={image ? { uri: image } : LOGO}
                size={40}
                avatarStyle={styles.avatar}
                onPress={goToProfile}
            />
            {!isMyVideo && !isFollowing && (
                <Icon
                    type='material-community'
                    name='plus'
                    size={14}
                    containerStyle={styles.iconContainer}
                    onPress={followUser} />
            )}
        </View>
    )
}
import React, { useEffect, useState } from 'react'
import { Linking, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Follow, Notification } from '../../../api'
import { useAuth } from '../../../hooks'
import { ENV } from '../../../utils'

import { styles } from './Social.styles'
const followApi = new Follow()
const notificationApi = new Notification()
export function Social(props) {
    const { idUser, instagram } = props
    const [isFollowing, setIsFollowing] = useState(undefined)
    const { accessToken, auth } = useAuth()
    const goToInstagram = () => {
        Linking.openURL(`https://www.instagram.com/${instagram}`)
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await followApi.followUser(accessToken, auth.user_id, idUser)
                setIsFollowing(response)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

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

    const unFollowUser = async () => {
        try {
            const response = await followApi.getFollowing(accessToken, auth.user_id, idUser)
            const idFollow = response.id

            await followApi.unFollow(accessToken, idFollow)
            setIsFollowing(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.content}>
            {isFollowing === false ? (
                <Button
                    title='Follow'
                    buttonStyle={styles.btnFollow}
                    containerStyle={styles.btnFollowContainer}
                    onPress={followUser}
                />) : null}


            {isFollowing ? (
                <Button
                    icon={{
                        type: 'material-community',
                        name: 'account-check-outline',
                    }}
                    buttonStyle={styles.btnUnfollowing}
                    containerStyle={styles.btnUnfollowingContainer}
                    onPress={unFollowUser}
                />
            ) : null}


            {instagram ? (
                <Button
                    icon={{
                        type: 'material-community',
                        name: 'instagram',

                    }}
                    buttonStyle={styles.btnInstagram}
                    containerStyle={styles.btnInstagramContainer}
                    onPress={goToInstagram}
                />
            ) : null}
        </View>
    )
}
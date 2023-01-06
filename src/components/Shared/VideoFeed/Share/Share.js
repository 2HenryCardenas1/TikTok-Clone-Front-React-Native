import React, { useState } from 'react'
import { Share as ShareRN, View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import { Notification, Video } from '../../../../api'
import { useAuth } from '../../../../hooks'
import { ENV, nFormatter } from '../../../../utils'
import { styles } from './Share.styles'
const videoApi = new Video()
const notificationApi = new Notification()
export function Share(props) {
    const { idVideo, shareCounter, idTargetUser } = props
    const { auth, accessToken } = useAuth()
    const [countShare, setCountShare] = useState(shareCounter)

    const onShare = async () => {
        try {
            const result = await ShareRN.share({
                message: 'Share video',

            })
            if (result.action === ShareRN.sharedAction) {
                onUpdateShareCounter()
                await notificationApi.create({
                    token: accessToken,
                    idTargetUser: idTargetUser,
                    idUserFollower: auth.user_id,
                    idVideo: idVideo,
                    typeNotification: ENV.TYPE_NOTIFICATION.SHARE
                })
            }

        } catch (error) {
            console.error(error)
        }
    }


    const onUpdateShareCounter = async () => {
        try {
            const newTotal = countShare + 1
            await videoApi.shareVideo(accessToken, idVideo, newTotal)
            setCountShare(newTotal)

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <View style={styles.content}>
            <Icon
                type="material-community"
                name="share"
                size={30}
                onPress={onShare}

            />
            <Text>{nFormatter(countShare)}</Text>
        </View>
    )
}
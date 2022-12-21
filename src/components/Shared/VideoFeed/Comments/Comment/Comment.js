import { DateTime } from 'luxon'
import React from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { LOGO } from '../../../../../../assets/images'
import { Comment as CommentApi } from '../../../../../api'
import { useAuth } from '../../../../../hooks'
import { styles } from './Comment.styles'

const commentApi = new CommentApi()
export function Comment(props) {

    const { comment, onReloadComments } = props
    const user_data = comment.user_data
    const { auth, accessToken } = useAuth()

    const confirmDeleteComment = () => {
        if (user_data.id === auth.user_id) {
            Alert.alert(
                "Delete comment",
                "Are you sure you want to delete this comment?",
                [
                    {
                        text: "Cancel",
                        style: "cancel",
                        onPress: () => console.log("Cancel Pressed")
                    },
                    {
                        text: "Delete",
                        onPress: deleteComment
                    }
                ]

            )
        } else {
            Alert.alert(
                "Only the owner of the comment can delete it",
                "",
                [
                    {
                        text: "Ok",
                        style: "cancel",
                    }
                ]
            )
        }

    }

    const deleteComment = async () => {
        try {
            await commentApi.deleteComment(accessToken, comment.id)
            onReloadComments()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <TouchableOpacity onLongPress={confirmDeleteComment} style={styles.content}>
            <Avatar
                rounded
                source={user_data.avatar ? { uri: user_data.avatar } : LOGO}
                size={35}

            />
            <View style={styles.infoContent}>
                <Text style={styles.username} >{user_data.username}</Text>
                <Text style={styles.textComment} >{comment.text}</Text>
                <Text style={styles.date}>{DateTime.fromISO(comment.created_at).setLocale("es").toFormat("dd 'de' LLLL 'del' yyyy")}</Text>
            </View>

        </TouchableOpacity>
    )
}
import { size } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Keyboard, Platform, View } from 'react-native'
import { Input } from 'react-native-elements'
import { Comment } from '../../../../../api'
import { useAuth } from '../../../../../hooks'
import { styled } from './CommentForm.styles'
const commentApi = new Comment()
export function CommentForm(props) {
    const { idTargetUser, idVideo, onReloadComments } = props

    const styles = styled()
    const { accessToken, auth } = useAuth()
    const [keyboardHeight, setKeyboardHeight] = useState()
    const [comment, setComment] = useState()

    useEffect(() => {
        //Listener to open the keyboard
        const showSubcription = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardHeight(Platform.OS === 'ios' ? e.endCoordinates.height - 20 : 100)
        })

        const hideSubcription = Keyboard.addListener('keyboardDidHide', (e) => {
            setKeyboardHeight(0)
        })
        return () => {
            showSubcription.remove()
            hideSubcription.remove()
        }
    }, [])

    const sendComment = async () => {
        if (size(comment) > 0) {
            try {
                await commentApi.createComment(accessToken, idVideo, auth.user_id, comment)
                setComment('')
                onReloadComments()
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <View style={[styles.content, { bottom: keyboardHeight }]}>
            <Input placeholder='Add comment'
                inputContainerStyle={styles.container}
                inputStyle={styles.input}
                onChangeText={value => setComment(value)}
                value={comment}
                onSubmitEditing={sendComment}
            />

        </View>
    )
}
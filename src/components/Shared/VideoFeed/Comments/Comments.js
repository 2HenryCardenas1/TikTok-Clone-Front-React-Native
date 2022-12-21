import { size } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Comment } from '../../../../api'
import { useAuth } from '../../../../hooks'
import { nFormatter } from '../../../../utils'
import { Comment as CommentCard } from './Comment'
import { CommentForm } from './CommentForm'
import { styled } from './Comments.styles'
import { Header } from './Header'
const { height } = Dimensions.get('screen')

const comment = new Comment()

export function Comments(props) {
    const { idUser, idVideo } = props

    const { accessToken } = useAuth()
    const [comments, setComments] = useState()
    const [reloadComments, setReloadComments] = useState(false)
    const styles = styled()
    const sheet = useRef()
    const totalComments = size(comments)


    useEffect(() => {

        (
            async () => {
                try {
                    const response = await comment.getCommentsVideo(accessToken, idVideo)
                    setComments(response)

                } catch (error) {
                    console.error(error)
                }
            }

        )()
    }, [reloadComments])

    const onReloadComments = () => setReloadComments(!reloadComments)

    const openSheet = () => sheet.current.open()
    const closeSheet = () => sheet.current.close()
    return (
        <>
            <View style={styles.content}>
                <Icon
                    type="material-community"
                    name="comment-processing"
                    size={30}
                    onPress={openSheet}

                />
                <Text>{nFormatter(totalComments)}</Text>
            </View>
            <RBSheet ref={sheet} height={height - 200} openDuration={200} keyboardAvoidingViewEnabled={false} customStyles={{
                container: styles.RBSheetContainer
            }}>
                <Header onClose={closeSheet} commentCounter={totalComments} />
                <FlatList
                    data={comments}
                    style={
                        styles.commentList
                    }
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CommentCard comment={item} onReloadComments={onReloadComments} />
                    )}

                    ListEmptyComponent={<Text style={
                        styles.noCommentText
                    }>Be the first to comment</Text>}

                />
                <CommentForm idTargetUser={idUser} idVideo={idVideo} onReloadComments={onReloadComments} />

            </RBSheet>
        </>
    )
}
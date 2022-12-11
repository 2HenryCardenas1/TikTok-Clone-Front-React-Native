import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import { nFormatter } from '../../../../utils'
import { styles } from './Comments.styles'
export function Comments(props) {
    const { idUser, idVideo } = props

    const openSheet = () => {
        console.log("Comentarios")
    }
    return (
        <View style={styles.content}>
            <Icon
                type="material-community"
                name="comment-processing"
                size={30}
                onPress={openSheet}

            />
            <Text>{nFormatter(0)}</Text>
        </View>
    )
}
import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import { styles } from './Header.styles'
export function Header(props) {
    const { onClose, commentCounter } = props

    const getTextComment = () => {
        if (commentCounter == 1) {
            return "comment"
        }
        return "comments"
    }
    return (
        <View style={styles.content}>
            <View />
            <Text>{commentCounter} {getTextComment()}</Text>
            <Icon
                type="material-community"
                name="close"
                size={16}
                onPress={onClose}
            />
        </View>
    )
}
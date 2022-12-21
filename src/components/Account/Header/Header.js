import React from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { LOGO } from '../../../../assets/images'
import { styles } from './Header.styles'
export function Header(props) {
    const { avatar, username } = props

    return (
        <View style={styles.content}>
            <Avatar
                rounded
                source={avatar ? { uri: avatar } : LOGO}
                size={100}
                containerStyle={styles.avatar}
            />
            <Text style={styles.username}>@{username}</Text>
        </View>
    )
}
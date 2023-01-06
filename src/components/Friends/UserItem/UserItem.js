import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { LOGO } from '../../../../assets/images'
import { screens } from '../../../utils'
import { styles } from './UserItem.styles'

export function UserItem(props) {
    const { item: { id, avatar, username } } = props

    const navigation = useNavigation()
    const goToProfile = () => {
        navigation.navigate(screens.app.user, { idUser: id })
    }
    return (
        <TouchableOpacity style={styles.content} onPress={goToProfile}>
            <Avatar
                source={avatar ? { uri: avatar } : LOGO}
                rounded
                size={60}

            />
            <Text style={styles.text}>{username}</Text>
        </TouchableOpacity>
    )
}
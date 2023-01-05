import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { LOGO } from '../../../../assets/images'
import { screens } from '../../../utils'
import { styles } from './FollowItem.styles'
export function FollowItem(props) {

    const { user } = props
    const navigation = useNavigation()

    const goToUser = () => {
        navigation.goBack()
        navigation.navigate(screens.app.user, { idUser: user.id })
    }
    return (
        <TouchableOpacity onPress={goToUser} style={styles.content}>
            <Avatar
                source={user.avatar ? { uri: user.avatar } : LOGO}
                rounded
                size={30}
            />
            <View style={styles.info}>
                <Text>{user.first_name}</Text>
                <Text style={styles.username}>{user.username}</Text>
            </View>
        </TouchableOpacity>
    )
}
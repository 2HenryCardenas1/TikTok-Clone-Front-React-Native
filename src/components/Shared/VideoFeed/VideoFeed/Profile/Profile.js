import React from 'react'
import { View } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { LOGO } from '../../../../../../assets/images'
import { styles } from './Profile.styles'
export function Profile(props) {
    const { idUser, image } = props

    const goToProfile = () => {
        console.log("goToProfile")
    }
    const followUser = () => {
        console.log("followUser", idUser)
    }
    return (
        <View style={styles.content}>
            <Avatar
                rounded
                source={image ? { uri: image } : LOGO}
                size={40}
                avatarStyle={styles.avatar}
                onPress={goToProfile}
            />
            <Icon
                type='material-community'
                name='plus'
                size={14}
                containerStyle={styles.iconContainer}
                onPress={followUser} />
        </View>
    )
}
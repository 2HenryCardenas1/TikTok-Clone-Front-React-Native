import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { LOGO } from '../../../../../assets/images'
import { useAuth } from '../../../../hooks'
import { screens } from '../../../../utils'
import { styles } from './Profile.styles'
export function Profile(props) {

    const { idUser, image } = props
    const { auth } = useAuth()
    const { name } = useRoute()
    const navigation = useNavigation()
    const isMyVideo = idUser === auth.user_id


    const goToProfile = () => {
        if (isMyVideo && name === screens.home.home) {
            navigation.navigate(screens.account.tab, { screen: screens.account.account })
        } else {
            navigation.navigate(screens.app.user, { idUser })
        }
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
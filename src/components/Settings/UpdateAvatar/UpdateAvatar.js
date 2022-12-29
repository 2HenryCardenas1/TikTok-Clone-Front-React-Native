import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import { Pressable, View } from 'react-native'
import { Avatar, Icon, Text } from 'react-native-elements'
import { LOGO } from '../../../../assets/images'
import { User } from '../../../api'
import { useAuth } from '../../../hooks'
import { styles } from './UpdateAvatar.styles'

const userApi = new User()
export function UpdateAvatar(props) {
    const { userData, onReloadUser } = props
    const { accessToken } = useAuth()
    const changeAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            updateAvatar(result.uri)
        }
    }

    const updateAvatar = async (imageUri) => {
        try {
            await userApi.updateAvatar(accessToken, imageUri)
            onReloadUser()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Pressable style={styles.content} onPress={changeAvatar}>
            <View style={styles.contentAvatar}>
                <Avatar
                    size={100}
                    source={userData.avatar ? { uri: userData.avatar } : LOGO}
                    rounded
                    containerStyle={styles.avatar}
                />
                <View style={styles.iconContent}>
                    <Icon
                        type='material-community'
                        name='camera-outline'
                        size={14}
                        containerStyle={styles.iconContainer}
                        iconStyle={styles.icon}
                    />
                </View>
            </View>
            <Text>Change profile</Text>
        </Pressable>
    )
}
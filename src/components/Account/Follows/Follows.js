import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View } from 'react-native'
import { Text } from 'react-native-elements'
import { screens } from '../../../utils'
import { styles } from './Follows.styles'
export function Follows(props) {
    const { idUser } = props
    const navigation = useNavigation()
    const openFollowed = () => {
        navigation.navigate(screens.app.followed, { idUser })
    }
    const openFollowers = () => {
        navigation.navigate(screens.app.followers, { idUser })
    }

    return (
        <View style={styles.content}>
            <Pressable style={styles.item} onPress={openFollowed}>
                <Text style={styles.count}>100</Text>
                <Text style={styles.title}>Followed</Text>

            </Pressable>
            <Pressable style={styles.item} onPress={openFollowers}>
                <Text style={styles.count}>443</Text>
                <Text style={styles.title}>Followers</Text>

            </Pressable>
        </View>
    )
}
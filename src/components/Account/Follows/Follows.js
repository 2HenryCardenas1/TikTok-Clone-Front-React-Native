import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Follow } from '../../../api'
import { useAuth } from '../../../hooks'
import { screens } from '../../../utils'
import { styles } from './Follows.styles'

const followApi = new Follow()
export function Follows(props) {

    const { idUser } = props
    const navigation = useNavigation()
    const [follow, setFollow] = useState(0)
    const [followers, setFollowers] = useState(0)
    const { accessToken } = useAuth()

    const openFollowed = () => {
        navigation.navigate(screens.app.followed, { idUser })
    }
    const openFollowers = () => {
        navigation.navigate(screens.app.followers, { idUser })
    }


    useEffect(() => {
        (
            async () => {
                try {
                    const response = await followApi.getFollowedsCount(accessToken, idUser)
                    setFollow(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()

    }, [])

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await followApi.getFollowersCount(accessToken, idUser)
                    setFollowers(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()

    }, [])






    return (
        <View style={styles.content}>
            <Pressable style={styles.item} onPress={openFollowed}>
                <Text style={styles.count}>{follow}</Text>
                <Text style={styles.title}>Followed</Text>

            </Pressable>
            <Pressable style={styles.item} onPress={openFollowers}>
                <Text style={styles.count}>{followers}</Text>
                <Text style={styles.title}>Followers</Text>

            </Pressable>
        </View>
    )
}
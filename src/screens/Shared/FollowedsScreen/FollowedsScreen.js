import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Follow } from '../../../api'
import { FollowItem } from '../../../components/Shared'
import { useAuth } from '../../../hooks'
import { styles } from './FollowedsScreen.styles'

const followApi = new Follow()

export function FollowedsScreen(props) {
    const { navigation, route: { params } } = props
    const { accessToken } = useAuth()
    const [users, setUsers] = useState(null)

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await followApi.getFolloweds(accessToken, params.idUser)
                    setUsers(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [params.idUser])

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Following</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <FollowItem user={item.user_followed_data} />}
                keyExtractor={(_, index) => index}
                ListEmptyComponent={
                    <View>
                        <Text>No following</Text>
                    </View>
                }
            />
        </View>
    )
}
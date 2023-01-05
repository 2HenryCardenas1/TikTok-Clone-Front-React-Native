import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Follow } from '../../../api/follow'
import { FollowItem } from '../../../components/Shared/FollowItem'
import { useAuth } from '../../../hooks'
import { styles } from './FollowersScreen.styles'
const followApi = new Follow()

export function FollowersScreen(props) {
    const { route: { params } } = props
    const [users, setUsers] = useState(null)
    const { accessToken } = useAuth()
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await followApi.getFollowers(accessToken, params.idUser)
                    setUsers(response)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [params.idUser])

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Followers</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <FollowItem user={item.user_data} />}
                keyExtractor={(_, index) => index}
                ListEmptyComponent={
                    <View>
                        <Text>No followers</Text>
                    </View>}
            />
        </View>
    )
}
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Users } from '../../api'
import { SearchUsers, UserItem } from '../../components/Friends'
import { useAuth } from '../../hooks'
const usersApi = new Users()

export function FriendsScreen() {
    const [searchText, setSearchText] = useState("")
    const [users, setUsers] = useState()
    const { accessToken } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await usersApi.obtains(accessToken, searchText)
                setUsers(response)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [searchText])

    return (
        <View>
            <SafeAreaView>
                <SearchUsers setSearchText={setSearchText} />
            </SafeAreaView>
            <FlatList
                style={{
                    marginHorizontal: 12,
                    height: '100%',

                }}
                data={users}
                numColumns={4}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<UserItem item={item} />)}
                ListEmptyComponent={() => (
                    <Text style={{ textAlign: 'center' }}>Not fount</Text>)}

            />

        </View>
    )
}
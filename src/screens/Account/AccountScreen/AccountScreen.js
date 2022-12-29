import { useFocusEffect } from '@react-navigation/native'
import { capitalize } from 'lodash'
import React, { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import { Tab, TabView, Text } from 'react-native-elements'
import { User } from '../../../api'
import { Account } from '../../../components/Account'
import { useAuth } from '../../../hooks'
import { styles } from './AccountScreen.styles'

const userApi = new User()

export function AccountScreen(props) {
    const { navigation } = props

    const [tabActive, setTabActive] = useState(0)
    const [user, setUser] = useState(null)
    const { accessToken } = useAuth()



    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const response = await userApi.me(accessToken)
                    navigation.setOptions({ title: capitalize(response.first_name) })
                    setUser(response)
                } catch (error) {
                    console.error(error)
                }
            })()
        }, [])
    )

    if (!user) return null

    return (
        <ScrollView>
            <Account.Header avatar={user.avatar} username={user.username} />
            <Account.Follows idUser={user.id} />
            <Account.Settings instagram={user.instagram} />

            <Tab value={tabActive} onChange={(e) => setTabActive(e)} indicatorStyle={styles.indicatorStyle}>

                <Tab.Item label="Follow" containerStyle={styles.containerTabStyle}
                    icon={{
                        type: 'material-community',
                        name: 'grid',
                    }}
                />
                <Tab.Item label="Follow" containerStyle={styles.containerTabStyle}
                    icon={{
                        type: 'material-community',
                        name: 'format-list-bulleted',
                    }}
                />
            </Tab>

            <TabView value={tabActive} onChange={(e) => setTabActive(e)}>
                <TabView.Item>
                    <Text>Follow</Text>
                </TabView.Item>
                <TabView.Item>
                    <Text>Favorites</Text>
                </TabView.Item>
            </TabView>

        </ScrollView>
    )
}
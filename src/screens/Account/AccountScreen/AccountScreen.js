import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import { Tab, TabView } from 'react-native-elements'
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
                    navigation.setOptions({ title: response.first_name })
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
            <Account.Info description={user.description} website={user.website} />
            <Tab value={tabActive} onChange={(e) => setTabActive(e)} indicatorStyle={styles.indicatorStyle}>

                <Tab.Item label="Follow" containerStyle={styles.containerTabStyle}
                    icon={{
                        type: 'material-community',
                        name: 'grid',
                    }}
                />
                <Tab.Item label="Favorites" containerStyle={styles.containerTabStyle}
                    icon={{
                        type: 'material-community',
                        name: 'heart',
                    }}
                />
            </Tab>

            <TabView value={tabActive} onChange={(e) => setTabActive(e)}>
                <TabView.Item>
                    <Account.Videos idUser={user.id} />
                </TabView.Item>

                <TabView.Item>
                    <Account.VideosFavorites idUser={user.id} />
                </TabView.Item>
            </TabView>

        </ScrollView>
    )
}
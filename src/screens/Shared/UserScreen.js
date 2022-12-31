import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Tab, TabView } from 'react-native-elements'
import { User } from '../../api'
import { Account } from '../../components/Account'
import { useAuth } from '../../hooks'


const userApi = new User()

export function UserScreen(props) {

    const {
        route: { params },
        navigation

    } = props
    const [user, setUser] = useState(null)
    const [tabActive, setTabActive] = useState(0)
    const idUser = params.idUser
    const { accessToken } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await userApi.getUser(accessToken, idUser)
                navigation.setOptions({ title: response.first_name })
                setUser(response)


            } catch (error) {
                console.error(error)
            }
        })()
    }, [idUser])

    if (!user) return null

    return (
        <ScrollView>
            <Account.Header avatar={user.avatar} username={user.username} />
            <Account.Follows idUser={idUser} />
            <Account.Social idUser={idUser} instagram={user.instagram} />
            <Account.Info description={user.description} website={user.website} />
            <Tab value={tabActive} onChange={e => setTabActive(e)}
                indicatorStyle={{
                    backgroundColor: '#fff'
                }}>
                <Tab.Item containerStyle={{
                    backgroundColor: 'transparent'
                }}
                    icon={{
                        type: 'material-community',
                        name: 'grid',
                    }}
                />
                <Tab.Item containerStyle={{
                    backgroundColor: 'transparent'
                }}
                    icon={{
                        type: 'material-community',
                        name: 'heart',
                    }}
                />

            </Tab>

            <TabView value={tabActive} onChange={e => setTabActive(e)} animationType='timing'>
                <TabView.Item>
                    <Account.Videos idUser={idUser} />

                </TabView.Item>
                <Account.VideosFavorites idUser={idUser} />
                <TabView.Item>


                </TabView.Item>
            </TabView>
        </ScrollView>
    )
}
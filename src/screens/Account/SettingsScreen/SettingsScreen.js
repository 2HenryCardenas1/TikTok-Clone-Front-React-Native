import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { User } from '../../../api'
import { UpdateAvatar, UpdateData } from '../../../components/Settings'
import { useAuth, useTheme } from '../../../hooks'
import { styled } from './SettingsScreen.styles'
const userApi = new User
export function SettingsScreen(props) {
    const { navigation } = props

    const [user, setUser] = useState(null)
    const [reload, setReload] = useState(false)
    const { accessToken, logout } = useAuth()
    const { toogleTheme, darkMode } = useTheme()
    const styles = styled()

    useFocusEffect(
        useCallback(() => {
            (
                async () => {
                    try {
                        const response = await userApi.me(accessToken)
                        setUser(response)
                    } catch (error) {
                        console.error(error)
                    }
                }
            )()
        }, [reload])
    )

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    type='material-community'
                    name={darkMode ? 'weather-sunny' : 'weather-night'}
                    size={24}
                    onPress={toogleTheme}
                />
            )
        })
    }, [darkMode])

    const onReloadUser = () => {
        setReload(!reload)
    }

    if (!user) return null
    return (
        <ScrollView>

            <UpdateAvatar userData={user} onReloadUser={onReloadUser} />
            <UpdateData
                name={user.first_name}
                username={user.username}
                description={user.description}
                email={user.email}
                website={user.website}
                instagram={user.instagram}

            />
            <Button title='Logout' buttonStyle={styles.btnLogout} onPress={logout} />
        </ScrollView>
    )
}
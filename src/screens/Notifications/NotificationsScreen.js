import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import { Notification } from '../../api'
import { ListNotifications } from '../../components/Notification'
import { useAuth } from '../../hooks'

const notificationApi = new Notification()
export function NotificationsScreen(props) {
    const { navigation } = props
    const [notifications, setNotifications] = useState(null)
    const { auth, accessToken } = useAuth()
    const [showNotifications, setShowNotifications] = useState(false)
    const [refreshing, setRefreshing] = useState(false)


    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    type="material-community"
                    name={showNotifications ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    onPress={() => setShowNotifications((prevState) => !prevState)}
                />
            )
        })
    }, [showNotifications])

    useEffect(() => {
        (async () => {
            try {
                const response = await notificationApi.getByUser(accessToken, auth.user_id, showNotifications)

                setNotifications(response)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [showNotifications])

    const onRefresh = async () => {
        setRefreshing(true)
        try {
            const response = await notificationApi.getByUser(accessToken, auth.user_id, showNotifications)
            setNotifications(response)
        } catch (error) {
            console.error(error)
        } finally {
            setRefreshing(false)
        }
    }

    const readNotification = async (notificationId, setShowNotifications) => {
        Alert.alert("Read notification", "Are you sure you want to mark this notification as read?", [
            {
                text: "Cancel",
                style: "cancel"

            },
            {
                text: "Yes",
                onPress: async () => {
                    try {
                        await notificationApi.read(accessToken, notificationId)
                        setShowNotifications(true)
                    } catch (error) {
                        console.error(error)
                    }
                }
            }
        ])
    }

    if (!notifications) return null
    return (
        <ListNotifications
            notifications={notifications}
            onRefresh={onRefresh}
            refreshing={refreshing}
            readNotification={readNotification}
        />

    )
}
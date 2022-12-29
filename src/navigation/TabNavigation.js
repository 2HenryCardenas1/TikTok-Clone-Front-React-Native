import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { screens } from '../utils'
import { AccountStack, FriendsStack, HomeStack, NotificationsStack, UploadsStack } from './stacks'

const Tab = createBottomTabNavigator()

export function TabNavigation() {

    const screenOptions = {
        headerShown: false
    }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#ffff",
                tabBarStyle: {
                    backgroundColor: "#252525",
                    borderTopWidth: 0,
                    height: 50,
                    borderRadius: 20
                },
                tabBarIcon: (props) => (tabIcon({ route, ...props }))

            })}

        >
            <Tab.Screen name={screens.home.tab} component={HomeStack} options={{
                ...screenOptions,
                title: "Home"
            }} />
            <Tab.Screen name={screens.friends.tab} component={FriendsStack} options={{
                ...screenOptions,
                title: "Friends"
            }} />
            <Tab.Screen name={screens.uploads.tab} component={UploadsStack} options={{
                ...screenOptions,
                tabBarLabelStyle: {
                    display: "none"
                }
            }} />
            <Tab.Screen name={screens.notification.tab} component={NotificationsStack} options={{
                ...screenOptions,
                title: "Notifications"
            }} />
            <Tab.Screen name={screens.account.tab} component={AccountStack} options={{
                ...screenOptions,
                title: "Account"
            }} />
        </Tab.Navigator>
    )
}

function tabIcon(props) {
    const { route, size, color, focused } = props

    let iconName = "plus"

    if (route.name === screens.home.tab) {
        iconName = focused ? "home" : "home-outline"
    }
    if (route.name === screens.friends.tab) {
        iconName = focused ? "account-multiple" : "account-multiple-outline"
    }

    if (route.name === screens.notification.tab) {
        iconName = focused ? "message-processing" : "message-processing-outline"
    }
    if (route.name === screens.account.tab) {
        iconName = focused ? "account" : "account-outline"
    }

    if (route.name === screens.uploads.tab) {
        return (
            <Icon
                type="material-community"
                name="plus"
                size={size}
                color={color}
                containerStyle={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 6,
                }}
                iconStyle={{
                    color: "#000",
                    fontSize: 14

                }}
            />
        )
    }

    return (
        <Icon
            type='material-community'
            name={iconName}
            size={size}
            color={color}
        />
    )
}
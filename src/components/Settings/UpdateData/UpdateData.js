import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import { screens } from '../../../utils'
import { styles } from './UpdateData.styles'

export function UpdateData(props) {
    const { name, username, description, email, website, instagram } = props

    const navigation = useNavigation()
    const goToChangeName = () => {
        navigation.navigate(screens.account.changeName, { name })
    }
    const goToChangeDescription = () => {
        navigation.navigate(screens.account.changeDescription, { description })
    }

    const goToChangeWebsite = () => {
        navigation.navigate(screens.account.changeWebSite, { website })
    }
    const goToChangeInstagram = () => {
        navigation.navigate(screens.account.changeInstagram, { instagram })
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>About you</Text>
            <BlockItem title='Name' value={name} onPress={goToChangeName} />
            <BlockItem title='Description' value={description} onPress={goToChangeDescription} />
            <BlockItem title='Username' value={username} />
            <BlockItem title='Email' value={email} />
            <Text style={styles.title}>Social</Text>
            <BlockItem title='Website' value={website} onPress={goToChangeWebsite} />
            <BlockItem title='Instagram' value={instagram} onPress={goToChangeInstagram} />
        </View>
    )
}


function BlockItem(props) {
    const { title, value, onPress } = props
    return (
        <Pressable style={styles.block} onPress={onPress}>
            <Text>{title}</Text>
            <View style={styles.blockContent}>
                <Text style={styles.blockValue} numberOfLines={1}>
                    {value}
                </Text>
                {onPress && (
                    <Icon
                        type='material-community'
                        name='chevron-right'
                        iconStyle={styles.icon}
                    />
                )}
            </View>
        </Pressable>
    )
}
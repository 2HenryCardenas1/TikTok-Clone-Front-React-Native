import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Linking, View } from 'react-native'
import { Button } from 'react-native-elements'
import { screens } from '../../../utils'
import { styles } from './Settings.styles'

export function Settings(props) {
    const { instagram } = props


    const navigation = useNavigation()

    const openSettings = () => {
        navigation.navigate(screens.account.settings)
    }

    const openUrl = () => {
        Linking.openURL(`https://instagram.com/${instagram}/`)
    }

    return (
        <View style={styles.content}>
            <Button
                title='Edit Profile'
                buttonStyle={styles.settings}
                containerStyle={styles.settings}
                titleStyle={styles.settingsTitle}
                onPress={openSettings}
            />
            {instagram ? (<Button
                icon={{ type: 'material-community', name: 'instagram' }}
                buttonStyle={styles.social}
                containerStyle={styles.social}
                onPress={openUrl}
            />) : null}
        </View>
    )
}
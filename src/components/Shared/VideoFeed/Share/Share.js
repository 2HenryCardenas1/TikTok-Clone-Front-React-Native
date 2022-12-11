import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import { nFormatter } from '../../../../utils'
import { styles } from './Share.styles'

export function Share(props) {
    const { idVideo, shareCounter, idTargetUser } = props
    const onShare = () => {
        console.log("Share")
    }
    return (
        <View style={styles.content}>
            <Icon
                type="material-community"
                name="share"
                size={30}
                onPress={onShare}

            />
            <Text>{nFormatter(shareCounter)}</Text>
        </View>
    )
}
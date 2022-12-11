import React from 'react'
import { Pressable, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import { styles } from './Header.styles'

import { ENV } from '../../../utils'
export function Header(props) {
    const { typeVideos, setTypeVideos } = props

    const onChangeTypeVideos = (type) => {
        setTypeVideos(type)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => onChangeTypeVideos(ENV.TYPE_VIDEO.FOLLOWING)}>
                <Text style={typeVideos === ENV.TYPE_VIDEO.FOLLOWING ? styles.active : styles.inactive}>Following</Text>
            </Pressable>
            <Text> | </Text>
            <Pressable onPress={() => onChangeTypeVideos(ENV.TYPE_VIDEO.FOR_YOU)}>
                <Text style={typeVideos === ENV.TYPE_VIDEO.FOR_YOU ? styles.active : styles.inactive}>For you</Text>
            </Pressable>
        </SafeAreaView>
    )
}
import { useFocusEffect } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import { screens } from '../../utils'

export function UploadsScreen(props) {

    useFocusEffect(
        useCallback(() => {
            (
                async () => {
                    const result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                    })
                    if (result.cancelled === true) {
                        props.navigation.goBack()
                    } else {
                        props.navigation.navigate(screens.uploads.publishVideo, { videoUri: result.uri })
                    }
                }

            )()
        }, [])
    )
    return (
        <View />
    )
}
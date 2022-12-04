import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import { Pressable, View } from 'react-native'
import { Image, Input, Text } from 'react-native-elements'
import { styles } from './VideoData.styles'

export function VideoData(props) {

    const { formik } = props

    const selectedImageVideo = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        })
        if (!result.cancelled) {
            formik.setFieldValue('imageUri', result.uri)
        }
    }
    return (
        <View style={styles.content}>
            <Input
                placeholder="Description to your video"
                containerStyle={styles.inputContainer}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                multiline
                onChangeText={text => formik.setFieldValue("description", text)}
                errorMessage={formik.errors.description}
            />
            <Pressable
                style={styles.imageContainer}
                onPress={selectedImageVideo}
            >
                <Image
                    source={{ uri: formik.values.imageUri || null }}
                    style={styles.image}
                />
                <Text style={styles.imageText}>Click to add cover</Text>
            </Pressable>
        </View>
    )
}
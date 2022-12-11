import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import { nFormatter } from '../../../../utils'
import { styles } from './Likes.styles'

export function Likes(props) {
    const { idVideo, likesCounter, idTargetUser } = props

    const [isLike, setIsLike] = useState(false)
    return (
        <View style={styles.content}>
            <Icon
                type='material-community'
                name='heart'
                size={30}
                onPress={() => console.log('like')}
                iconStyle={isLike ? styles.likeOK : styles.iconStyle}
            />
            <Text>{nFormatter(likesCounter)}</Text>
        </View>
    )
}
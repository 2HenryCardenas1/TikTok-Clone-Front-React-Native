import React, { useState } from 'react'
import { Linking, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './Social.styles'
export function Social(props) {
    const { idUser, instagram } = props
    const [isFollowing, setIsFollowing] = useState(undefined)
    const goToInstagram = () => {
        Linking.openURL(`https://www.instagram.com/${instagram}`)
    }
    return (
        <View style={styles.content}>
            {isFollowing === false ? (
                <Button
                    title='Follow'
                    buttonStyle={styles.btnFollow}
                    containerStyle={styles.btnFollowContainer}
                    onPres={() => console.log('Follow')}
                />) : null}


            {isFollowing ? (
                <Button
                    icon={{
                        type: 'material-community',
                        name: 'account-check-outline',
                    }}
                    buttonStyle={styles.btnUnfollowing}
                    containerStyle={styles.btnUnfollowingContainer}
                    onPres={() => console.log('Unfollowing')}
                />
            ) : null}


            {instagram ? (
                <Button
                    icon={{
                        type: 'material-community',
                        name: 'instagram',

                    }}
                    buttonStyle={styles.btnInstagram}
                    containerStyle={styles.btnInstagramContainer}
                    onPress={goToInstagram}
                />
            ) : null}
        </View>
    )
}
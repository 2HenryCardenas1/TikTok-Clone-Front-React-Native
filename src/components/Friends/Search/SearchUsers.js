import React from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './SearchUsers.styles'

export function SearchUsers(props) {

    const { setSearchText } = props
    return (
        <View>
            <Input
                placeholder="Find a friends"
                inputContainerStyle={styles.container}
                leftIcon={{
                    type: 'material-community',
                    name: 'magnify',
                }}
                onChangeText={(text) => setSearchText(text)}
            />
        </View>
    )
}
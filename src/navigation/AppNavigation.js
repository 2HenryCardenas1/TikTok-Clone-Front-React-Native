import { SafeAreaView } from 'react-native'
import React from 'react'
import { Text, Button } from 'react-native-elements'
import {useAuth} from '../hooks'

export  function AppNavigation() {
    const {logout} = useAuth();
  return (
    <SafeAreaView>
      <Text>AppNavigation </Text>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  )
}
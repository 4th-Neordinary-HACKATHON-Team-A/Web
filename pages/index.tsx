import React, { useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {StyleSheet, Text, View} from 'react-native'
import {commonStyles} from '../styles/common'
import Home from './Home/Home'

const Stack = createStackNavigator()

const Pages = () => {
  return (
    <View>
      {/* <Stack.Screen name='home' component={Home} /> */}
      {/* <Home /> */}
    </View>
  )
}

export default Pages

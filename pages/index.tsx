import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {StyleSheet, Text, View} from 'react-native'

const Stack = createStackNavigator()

const Pages = () => {
  return <Text style={{color: '#000', alignItems: 'center', justifyContent: 'center'}}>index</Text>
}

export default Pages

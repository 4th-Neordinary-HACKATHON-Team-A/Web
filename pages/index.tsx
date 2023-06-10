import React, { useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../pages/Home/Home'
const Stack = createStackNavigator()

const Pages = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}

export default Pages
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import CustomInput from '../../components/CustomInput'
import ChatBarIcon from '../../assets/svg/ChatBarIcon'
import COLORS from '../../styles/colors'
import { ChatBottom } from './ChatBottom'

const Stack = createStackNavigator()


const ChatPage = () => {
  return (
    <View style={{flex: 1}}>
        <ChatBottom />
    </View>
  )
}

export default ChatPage;

const styles = StyleSheet.create({
    
})
import React, { useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {StyleSheet, Text, TextInput, View, Image} from 'react-native'
import { SelectChat } from '../components/Chat'
import { PurpleFullButton } from '../components/Button'
import ChatIcon from '../assets/svg/ChatIcon'
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../styles/colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from '../styles/common'

const Stack = createStackNavigator()

const OnBoarding = ({navigation}) => {
    const [inputText, setInputText] = useState<string>('');
    const handleSaveText = async () => {
        console.log("GO")
        try {
          await AsyncStorage.setItem('nickname', inputText);
          console.log('Text saved successfully.');
        } catch (error) {
          console.log('Error saving text: ', error);
        }
        navigation.navigate('Home')
      };
  return (
    <View style={[{alignItems: "center", justifyContent: "center",}, commonStyles.container]}>
        <View >
        <Image 
        style={{ width: 140, height: 115}}
        source={require('../assets/img/Logo.png')} />
        </View>
        <View style={styles.inputBox}>
            <TextInput
            onChangeText={setInputText}
            value={inputText}
            style={styles.inputText}
            placeholderTextColor='#FFF'
            placeholder='사용하실 닉네임을 입력해주세요.' />
            <LinearGradient 
            start={{x: 0.6, y: 0.1}} end={{x: 0.9, y: 1}}
            style={styles.inputBottom}
            colors={[COLORS.PURPLE_100, '#1D1D1D']} />
        </View>
        <PurpleFullButton text='시작하기' onClick={handleSaveText}/>
    </View>
  )
}

export default OnBoarding;

const styles = StyleSheet.create({
    inputBottom: {
        width: 253,
        height: 1,
        marginBottom: 13,
    },
    inputBox: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    inputText: {
        paddingBottom: 8,
        fontSize: 17,
        color: '#FFF'
    }
  })
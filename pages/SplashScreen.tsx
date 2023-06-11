import React, {useEffect} from 'react'
import Splash from '../assets/img/splash.png'
import {Dimensions, Image} from 'react-native'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding')
    }, 2000)
  }, [])
  return (
    <Image
      source={Splash}
      style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      resizeMode='contain'
    />
  )
}

export default SplashScreen

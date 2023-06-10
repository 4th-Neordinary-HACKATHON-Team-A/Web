import React from 'react'
import {Text, Image, View, StyleSheet, Dimensions, Button, TouchableOpacity} from 'react-native'
import COLORS from '../../styles/colors'
import {CustomButton} from '../../components/Button'
import {commonStyles} from '../../styles/common'

import CategoryScrollView from './CategoryScrollView'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/main_welcome.png')} style={styles.mainImg} />
      <View style={styles.welcome}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{...styles.welcomeText, fontWeight: 'bold'}}>K-인어공주</Text>
          <Text style={styles.welcomeText}>님,</Text>
        </View>
        <Text style={styles.welcomeText}>환영합니다!</Text>
      </View>
      <View style={styles.flexCenterWrapper}>
        <CustomButton text='추억 생성하러 가기' style={styles.puppleBtn} textStyle={styles.puppleBtnText} />
      </View>
      <View style={styles.main}>
        <View style={styles.titleHeader}>
          <Text style={{...commonStyles.title, color: 'white'}}>카테고리 별로 모아보고 싶다면?</Text>
          <TouchableOpacity>
            <Text style={styles.more}>더보기</Text>
          </TouchableOpacity>
        </View>
        <CategoryScrollView />
        <View style={styles.titleHeader}>
          <Text style={{...commonStyles.title, color: 'white'}}>실시간 업로드된 추억</Text>
          <TouchableOpacity>
            <Text style={styles.more}>더보기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  flexCenterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImg: {
    width: '100%',
    height: 222,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  welcome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  welcomeText: {
    fontSize: 17,
    color: COLORS.PURPLE_200,
  },
  puppleBtn: {
    width: 200,
    height: 70,
    borderRadius: 42,
    marginBottom: 46,
  },
  puppleBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  main: {
    paddingHorizontal: 20,
  },
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  more: {
    color: 'white',
    fontWeight: '400',
    fontSize: 10,
  },
})

export default Home
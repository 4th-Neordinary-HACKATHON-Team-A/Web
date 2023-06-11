import {Text, Image, View, StyleSheet, FlatList, Button, TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'

import COLORS from '../../styles/colors'
import {CustomButton} from '../../components/Button'
import {commonStyles} from '../../styles/common'
import MemoryCard from "../../components/MemoryCard"
import CategoryScrollView from './CategoryScrollView'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Item } from "../Categories/Categories.styled";

import {memoryData} from '../../assets/memory'

const Home = ({navigation}) => {
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('nickname').then(nickname => {
      setNickname(nickname ?? 'user')
    })
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await fetch('https://mocum-project-gmck.vercel.app/api/dev/recipeData')
      const json = await response.json()
      console.log(json)
    })()
  }, [])

  return (
    <ScrollView style={[styles.container, commonStyles.container]}>
      <Image source={require('../../assets/img/main_welcome.png')} style={styles.mainImg} />
      <View style={styles.welcome}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{...styles.welcomeText, fontWeight: 'bold'}}>{nickname}</Text>
          <Text style={styles.welcomeText}>님,</Text>
        </View>
        <Text style={styles.welcomeText}>환영합니다!</Text>
      </View>
      <View style={styles.flexCenterWrapper}>
        <CustomButton
          onClick={() => navigation.navigate('Chat')}
          text='추억 생성하러 가기'
          style={styles.puppleBtn}
          textStyle={styles.puppleBtnText}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.titleHeader}>
          <Text style={{...commonStyles.title, color: 'white'}}>카테고리 별로 모아보고 싶다면?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
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
        <View style={styles.memory}>
          {/* {memoryData.map((item, index) => {
            console.log(item.uri)
            return <MemoryCard title={item.title} name={item.name} time={item.time} uri={item.uri} key={index} />
          })} */}
          {/* <FlatList
            data={memoryData}
            renderItem={({item, index}) => (
              <MemoryCard title={item.title} name={item.name} time={item.time} uri={item.uri} key={index} />
            )}
          ></FlatList> */}
          <View style={styles.tempWrapper}>
            <MemoryCard
              title={memoryData[0].title}
              name={memoryData[0].name}
              time={memoryData[0].time}
              uri={memoryData[0].uri}
            />
            <MemoryCard
              title={memoryData[1].title}
              name={memoryData[1].name}
              time={memoryData[1].time}
              uri={memoryData[1].uri}
            />
          </View>
          <View style={styles.tempWrapper}>
            <MemoryCard
              title={memoryData[2].title}
              name={memoryData[2].name}
              time={memoryData[2].time}
              uri={memoryData[2].uri}
            />
            <MemoryCard
              title={memoryData[3].title}
              name={memoryData[3].name}
              time={memoryData[3].time}
              uri={memoryData[3].uri}
            />
          </View>
          <View style={styles.tempWrapper}>
            <MemoryCard
              title={memoryData[4].title}
              name={memoryData[4].name}
              time={memoryData[4].time}
              uri={memoryData[4].uri}
            />
            <MemoryCard
              title={memoryData[5].title}
              name={memoryData[5].name}
              time={memoryData[5].time}
              uri={memoryData[5].uri}
            />
          </View>
          <View style={styles.tempWrapper}>
            <MemoryCard
              title={memoryData[6].title}
              name={memoryData[6].name}
              time={memoryData[6].time}
              uri={memoryData[6].uri}
            />
            <MemoryCard
              title={memoryData[7].title}
              name={memoryData[7].name}
              time={memoryData[7].time}
              uri={memoryData[7].uri}
            />
          </View>
          <View style={styles.tempWrapper}>
            <MemoryCard
              title={memoryData[8].title}
              name={memoryData[8].name}
              time={memoryData[8].time}
              uri={memoryData[8].uri}
            />
            <MemoryCard
              title={memoryData[9].title}
              name={memoryData[9].name}
              time={memoryData[9].time}
              uri={memoryData[9].uri}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tempWrapper: {
    display: 'flex',
    flexDirection:'row',
  },
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
  memory: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})

export default Home

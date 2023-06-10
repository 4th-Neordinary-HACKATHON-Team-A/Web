import React, {useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {StyleSheet, Text, View} from 'react-native'
import {commonStyles} from '../styles/common'
import Home from './Home/home'
import Categories from './Categories/Categories'
import Upload from './Upload/Upload'
import CommentList from './CommentList'
import Result from './Result'
import Post from './Post'

const Stack = createStackNavigator()

const Pages = () => {
  return (
    <View>
      {/* <Stack.Screen name='home' component={Home} /> */}
      {/* <CommentList
        comments={[
          {title: '자료구조론 에이쁠 받고 싶어요', desc: '초등학생 때 어디에서 사셨나요..'},
          {title: '자료구조론 에이쁠 받고 싶어요', desc: '초등학생 때 어디에서 사셨나요..'},
          {title: '자료구조론 에이쁠 받고 싶어요', desc: '초등학생 때 어디에서 사셨나요..'},
        ]}
      /> */}
      <Post />
    </View>
  )
}

export default Pages

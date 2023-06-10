import React, {useState} from 'react'
import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'
import {commonStyles} from '../styles/common'
import COLORS from "../styles/colors"
import HeartButton from "./../components/HeartButton";
interface PostProps {
  likeCount?: number
  title: string
  content?: string
  nickname: string
  time?: number
  source: string
  category: string | string[]
}

const Post = ({likeCount, title, content, nickname, time, source, category} : PostProps) => {
  const [like, setLike] = useState(false)

  const toggleLike = async (e) => {
    setLike(!like)
  }
  return (
    <SafeAreaView>
      <ImageBackground source={require('../assets/image-temp.jpg')} resizeMode='cover' style={styles.image} />
      <View style={styles.container}>
        <View style={styles.likeBox}>
          <View style={styles.likeLeftBox}>
            {/* <Image source={require('../assets/img/ic-empty-like.png')} style={styles.likeButton} /> */}
            <HeartButton like={like} onPress={toggleLike} />
            <Text style={styles.likeText}>좋아요 {likeCount}개</Text>
          </View>
          <Image source={require('../assets/img/ic-share.png')} style={styles.likeButton} />
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>
            {title}
          </Text>
          <Text style={styles.timeText}>{time}분전</Text>
        </View>
        <Text style={styles.contentText}>
          {content}
        </Text>
        <LinearGradient
        // start={{x: 0.6, y: 0.1}} end={{x: 0.7, y: 1}}
        start={{x: 0.6, y: 0.1}}
        end={{x: 0.9, y: 1}}
        style={styles.category}
        colors={[COLORS.PURPLE_100, '#1D1D1D']}
      >
          <Text style={styles.categotyText}>#여행</Text>
        </LinearGradient>
      <Text style={styles.nicknameText}>by {nickname}</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 390,
    marginBottom: 20,
  },
  likeBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 34,
  },
  likeLeftBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  likeButton: {
    width: 20,
    height: 20,
  },
  likeText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 10,
  },
  titleText: {
    color: 'red',
    fontWeight: '700',
    fontSize: 16,
    marginRight: 17,
  },
  timeText: {
    color: 'red',
    fontWeight: '400',
    fontSize: 11,
  },
  contentText: {
    color: 'red',
    fontWeight: '400',
    fontSize: 14,
    paddingRight: 26,
    paddingBottom: 16,
  },
  nicknameText: {
    color: COLORS.PURPLE_300,
    fontWeight: '600',
    fontSize: 11,
    textAlign: 'right',
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  category: {
    width: 52,
    height: 21,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: COLORS.PURPLE_100,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'white'
  },
  categotyText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 10,
  },
})

export default Post
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, ImageBackground, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {commonStyles} from '../styles/common'
import {PurpleFullButton} from '../components/Button'

const Result = ({navigation}) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView>
        <Text style={{...commonStyles.title, paddingTop: 24}}>당신의 어렴풋한 추억이 생생해졌나요?</Text>
        <Text style={styles.title}>⦁ 추억 내용</Text>
        <Text style={styles.content}>
          아침 햇살이 미세하게 떠오르는 하늘 아래, 설레임이 가득한 순간을 그립게 묘사해 드리겠습니다. 흑백으로 그려진
          그림 속에서, 넓은 하늘은 청명하게 펼쳐져 있습니다. 태양은 조금씩 높이 떠오르며 그 빛이 주변을 밝혀줍니다. 그
          안에는 당신의 친구가 있습니다. 그의 얼굴은 자신있는 미소로 가득차 있고, 눈은 설렘의 반짝임을 비춥니다.
          손그림의 흐릿한 선들은 자유로운 감각을 전달하며, 그림 속에서 설렘과 친구와의 따뜻한 순간이 느껴집니다.e
        </Text>
        <Text style={styles.title}>⦁ 추억 이미지</Text>
        <ImageBackground
          source={require('../assets/image-temp.jpg')}
          resizeMode='cover'
          style={styles.image}
        ></ImageBackground>
        <PurpleFullButton text='그림 업로드 하기' onClick={()=>{navigation.navigate('Upload')}}/>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textStyle}>다시 작성하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textStyle}>그림 저장하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    paddingTop: 15,
    marginBottom: 6,
  },
  content: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    height: 310,
    marginBottom: 20,
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20,
    gap: 12,
  },
  button: {
    backgroundColor: '#484848',
    paddingHorizontal: 43,
    paddingVertical: 12,
    borderRadius: 7,
  },
  textStyle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 13,
  },
})

export default Result
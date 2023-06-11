import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import Img1Src from '../assets/img/memories/img-1.png'
import Img2Src from '../assets/img/memories/img-2.png'
import Img3Src from '../assets/img/memories/img-3.png'
import Img4Src from '../assets/img/memories/img-4.png'
import Img5Src from '../assets/img/memories/img-5.png'
import Img6Src from '../assets/img/memories/img-6.png'
import Img7Src from '../assets/img/memories/img-7.png'
import Img8Src from '../assets/img/memories/img-8.png'
import Img9Src from '../assets/img/memories/img-9.png'
import Img10Src from '../assets/img/memories/img-10.png'
import { memoryData } from "./../assets/memory";
interface CardProps {
  title?: string;
  name: string;
  time?: number;
  uri?: string;
}

const MemoryCard = ({ title, name, time, uri }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <ImageBackground source={uri} resizeMode='cover' style={styles.card}>
          <View style={styles.textBox}>
            <Text style={styles.mainText}>{title}</Text>
            <Text style={styles.subText}>by {name}</Text>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={[styles.subText]}>{time}분 전</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cardBox: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 5,
    marginBottom: 5,
    // backgroundColor:'red'
  },
  card: {
    display: 'flex',
    flexDirection: 'column-reverse',
    backgroundColor: 'yellow',
    width: 160,
    height: 160,
  },
  textBox: {
    backgroundColor: 'white',
    opacity: 0.7,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 4,
  },
  mainText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  subText: {
    color: 'black',
    fontSize: 10,
    fontWeight: '500',
  },
})

export default MemoryCard
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Platform, ImageBackground } from 'react-native'

interface CardProps {
  title?: string;
  name: string;
  time?: number;
  source: string;
}
const MemoryCard = ({ title, name, time }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <ImageBackground source={require('../assets/image-temp.jpg')} resizeMode='cover' style={styles.card}>
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
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cardBox: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'column-reverse',
    backgroundColor: 'yellow',
    width: 144,
    height: 144,
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
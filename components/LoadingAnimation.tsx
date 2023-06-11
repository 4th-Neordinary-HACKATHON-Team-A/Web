import {StyleSheet, View, Text, Dimensions} from 'react-native'
import LottieView from 'lottie-react-native'
import {useEffect} from 'react'
import COLORS from '../styles/colors'

interface Props {
  second: number // 초
  goNextPage: () => void
}
const LoadingAnimation: React.FC<Props> = ({second, goNextPage}) => {
  useEffect(() => {
    setTimeout(() => {
      goNextPage()
    }, second * 1000)
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>추억 생성 중...</Text>
      <LottieView source={require('../assets/lottie-loading.json')} style={styles.animation} autoPlay speed={1} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    display: 'flex',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.BG_BLACK,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
    marginRight: 20,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 100,
  },
})

export default LoadingAnimation

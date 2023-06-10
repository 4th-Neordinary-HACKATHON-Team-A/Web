import { StyleSheet, View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

const LoadingAnimation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>추억 생성 중...</Text>
      <LottieView source={require('../assets/lottie-loading.json')} style={styles.animation} autoPlay speed={1} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 50,
  }
})

export default LoadingAnimation
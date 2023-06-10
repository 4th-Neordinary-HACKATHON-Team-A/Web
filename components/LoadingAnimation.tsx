import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'

const LoadingAnimation = () => {
  return (
    <View style={styles.container}>
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
})

export default LoadingAnimation
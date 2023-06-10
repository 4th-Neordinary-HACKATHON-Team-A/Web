import {StyleSheet, Text, View} from 'react-native'
import useRememoryFonts from "./infrastructures/hooks/useRememoryFonts"

export default function App() {
  const { fontsLoaded } = useRememoryFonts();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.font}>폰트체크</Text>
      <Text style={styles.font}>Font Check 123 </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
  }
})

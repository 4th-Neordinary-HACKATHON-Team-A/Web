import {Text} from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import useRememoryFonts from './infrastructures/hooks/useRememoryFonts'
import Pages from './pages'
import {commonStyles} from './styles/common'
import LoadingAnimation from './components/LoadingAnimation'

export default function App() {
  const {fontsLoaded} = useRememoryFonts()

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <SafeAreaProvider >
      <NavigationContainer>
        <Pages />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

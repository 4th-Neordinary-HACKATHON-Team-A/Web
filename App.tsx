import {Text} from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import useRememoryFonts from './infrastructures/hooks/useRememoryFonts'
import Pages from './pages'
import {commonStyles} from './styles/common'
import LoadingAnimation from './components/LoadingAnimation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnBoarding from './pages/onBoarding'
import Home from './pages/Home/Home'
import ChatPage from './pages/Chat/ChatPage'
import COLORS from './styles/colors'
const Stack = createNativeStackNavigator();

export default function App() {
  const {fontsLoaded} = useRememoryFonts()

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle: {
          backgroundColor: COLORS.BG_BLACK,
        },
        headerTintColor: 'white',
      }} initialRouteName="OnBoarding">
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: ''
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatPage}
            options={{
              headerTitle: ''
            }}
          />
           </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaProvider style={commonStyles.container}>
    //   <Pages />
    // </SafeAreaProvider>
  )
}


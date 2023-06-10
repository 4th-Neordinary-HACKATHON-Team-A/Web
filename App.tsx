import {Text} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import useRememoryFonts from './infrastructures/hooks/useRememoryFonts'
import Pages from './pages'
import {commonStyles} from './styles/common'
import LoadingAnimation from './components/LoadingAnimation'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import OnBoarding from './pages/onBoarding'
import Home from './pages/Home/Home'
import ChatPage from './pages/Chat/ChatPage'
import Categories from './pages/Categories/Categories'
import Result from './pages/Result'
import Upload from './pages/Upload/Upload'
import COLORS from './styles/colors'
import SplashScreen from './pages/SplashScreen'
const Stack = createNativeStackNavigator()

export default function App() {
  const {fontsLoaded} = useRememoryFonts()

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.BG_BLACK,
          },
          headerTintColor: 'white',
        }}
        initialRouteName='x'
      >
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='OnBoarding'
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name='Chat'
          component={ChatPage}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name='Category'
          component={Categories}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name='Result'
          component={Result}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name='Upload'
          component={Upload}
          options={{
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaProvider style={commonStyles.container}>
    //   <Pages />
    // </SafeAreaProvider>
  )
}

import React, { useState, useEffect, useCallback } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useRememoryFonts from './infrastructures/hooks/useRememoryFonts'
import Pages from './pages'
import { commonStyles } from "./styles/common"
import LoadingAnimation from "./components/LoadingAnimation"

export default function App() {
  const { fontsLoaded } = useRememoryFonts()
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <SafeAreaProvider>
      <Pages />
      <LoadingAnimation/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
  },
})

import {useEffect, useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
  KeyboardEvent,
  ScrollView,
} from 'react-native'
import ChatBarIcon from '../../assets/svg/ChatBarIcon'
import COLORS from '../../styles/colors'
import {SystemChat, MyChat} from '../../components/Chat'
import CustomInput from '../../components/CustomInput'
import {commonStyles} from '../../styles/common'
import LoadingAnimation from '../../components/LoadingAnimation'

const questions: string[] = [
  '어디에 있었나요?',
  '무엇을 하고 있었나요?',
  '어떤 기분이셨나요?',
  '그 때의 시간은 언제였나요?',
  '마지막으로 날씨는 어땠나요?',
]

const ChatPage = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<{question: string; answer: string}[]>([])
  const [inputText, setInputText] = useState('')
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  useEffect(() => {
    if (!currentQuestion) {
    }
  }, [currentQuestionIndex, navigation, questions])
  const handleAnswer = () => {
    const answer = inputText.trim()
    if (answer !== '') {
      const answerObj = {question: questions[currentQuestionIndex], answer}
      setAnswers(prevAnswers => [...prevAnswers, answerObj])
      setCurrentQuestionIndex(prevIndex => prevIndex + 1)
      setInputText('')
    }
  }
  // 키보드
  const onKeyboardDidshow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height)
  }
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidshow)
    return () => {
      showSubscription.remove()
    }
  }, [])
  // Input Focus
  const onInputFocus = () => {
    setIsFocused(true)
  }
  const onInputFocusOut = () => {
    setIsFocused(false)
    Keyboard.dismiss()
  }
  const currentQuestion = questions[currentQuestionIndex]
  const isFinished = !questions[currentQuestionIndex]
  console.log(answers)
  return (
    <View style={[{flex: 1}, commonStyles.container]}>
      <ScrollView style={styles.container}>
        {answers.map((answer, index) => (
          <View key={index}>
            <SystemChat text={answer.question} />
            <View style={{alignItems: 'flex-end'}}>
              <MyChat text={answer.answer} />
            </View>
          </View>
        ))}
        {!isFinished ? (
          <SystemChat text={currentQuestion} />
        ) : (
          <LoadingAnimation second={5} goNextPage={() => navigation.navigate('Result')} />
        )}
        {/* <SystemChat text='준비된 질문이 끝났습니다. 이제 추억을 그려드릴게요' /> */}
      </ScrollView>
      <View
        style={[
          styles.footer,
          {
            paddingBottom: isFocused ? (Platform.OS == 'ios' ? keyboardHeight : 10) : Platform.OS === 'ios' ? 20 : 0,
          },
        ]}
      ></View>
      <View
        style={[
          styles.footer,
          {
            paddingLeft: 24,
            paddingBottom: isFocused ? (Platform.OS == 'ios' ? keyboardHeight : 10) : Platform.OS === 'ios' ? 20 : 0,
          },
        ]}
      >
        <View style={styles.chatBarBox}>
          <View style={styles.chatBar} />
          <View style={styles.chatBarIcon}>
            <ChatBarIcon />
          </View>
          <View style={styles.chatBar} />
        </View>
        {!isFinished && (
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '85%'}}>
              <CustomInput
                onFocus={onInputFocus}
                onBlur={onInputFocusOut}
                value={inputText}
                onChangeText={setInputText}
              />
            </View>
            <TouchableOpacity style={styles.BtnBox} onPress={handleAnswer}>
              <Text style={styles.submitBtn}>전송</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

export default ChatPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  chatBar: {
    width: '43%',
    height: 1,
    backgroundColor: COLORS.PURPLE_100,
    justifyContent: 'center',
  },
  chatBarBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  chatBarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  BtnBox: {
    marginLeft: 11,
    justifyContent: 'center',
  },
  submitBtn: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },
})

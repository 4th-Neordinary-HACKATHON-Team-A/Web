import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ChatIcon from '../assets/svg/ChatIcon'
import COLORS from '../styles/colors'

interface ChatProps {
  text?: string
}
interface OptionProps {
  option: string
  onSelect: (option: string) => void
}

interface SelectChatProps {
  type: 'rewrite' | 'againRewrite'
  options: string[]
  onSelect: (option: string) => void
}
// const options = [
//     {text: '인물', value: 0},
//     {text: '장소', value: 1},
//     {text: '행동', value: 2},
//     {text: '기분', value: 3},
//     {text: '시간', value: 4},
//     {text: '날씨', value: 5}
// ]
const choice = [
  {text: '네, 다시 쓸래요', value: 1},
  {text: '아니요, 다 됐어요', value: 0},
]
const Options = ({option, onSelect}: OptionProps) => {
  return (
    <TouchableOpacity style={styles.optionBox} onPress={() => onSelect(option)}>
      <Text style={styles.optionText}>{option}</Text>
    </TouchableOpacity>
  )
}
export const SelectChat = ({type, options, onSelect}: SelectChatProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ChatIcon />
      <View style={styles.systemBox}>
        <Text style={[styles.systemText, {marginBottom: 8}]}>
          {type === 'rewrite' ? '어떤 내용을 다시 쓰고 싶으신가요?' : '다른 것도 다시 쓰고 싶으신가요?'}
        </Text>
        <View>
          {options.map((option, i) => (
            <Options option={option} onSelect={onSelect} key={i} />
          ))}
        </View>
      </View>
    </View>
  )
}

export const MyChat = ({text}: ChatProps) => {
  return (
    <View style={styles.myBox}>
      <Text style={styles.myText}>{text}</Text>
    </View>
  )
}
export const SystemChat = ({text}: ChatProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ChatIcon />
      <View style={styles.systemBox}>
        <Text style={styles.systemText}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  myBox: {
    maxWidth: 213,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 5,
  },
  myText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  systemBox: {
    maxWidth: 213,
    backgroundColor: COLORS.PURPLE_100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 6,
    marginBottom: 5,
  },
  systemText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  optionBox: {
    marginTop: 3,
    width: 180,
    height: 32,
    backgroundColor: '#FFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
  },
})

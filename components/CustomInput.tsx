import {StyleSheet, TextInput} from 'react-native'
import {FontFamily} from '../types/fontFamily'

interface Props {
  value: string
  onChangeText: (text: string) => void
  placeHolder?: string
}

export default function CustomInput({value, onChangeText, placeHolder}: Props) {
  const styles = StyleSheet.create({
    input: {
      width: '100%',
      height: 36,
      paddingVertical: 9.5,
      paddingHorizontal: 16,
      borderRadius: 36.5,
      backgroundColor: '#fff',
      color: '#000',
      fontFamily: FontFamily.pretendardBold,
      fontWeight: '500',
    },
  })
  return <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder={placeHolder} />
}

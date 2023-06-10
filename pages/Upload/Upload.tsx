import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native'
import * as U from './Upload.styled'
import RadioBtn from './components/RadioBtn'
import {useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import COLORS from '../../styles/colors'
import {CustomButton} from '../../components/Button'

interface Props {
  imageUrl?: string
}

const monologCategories = [
  '여행',
  '연애',
  '이별',
  '가족',
  '우정',
  '맛집',
  '성취',
  '혼란',
  '신비',
  '성장통',
  '기념일',
  '흑역사',
]

const monologCategoriesMapping = [
  {
    여행: 'TRAVEL',
    연애: 'LOVE',
    이별: 'FAREWELL',
    가족: 'FAMILY',
    우정: 'FRIENDSHIP',
    맛집: 'FOOD',
    성취: 'ACHIEVEMENT',
    혼란: 'CONFUSION',
    신비: 'MYSTERY',
    성장통: 'GROWING_PAINS',
    기념일: 'ANNIVERSARY',
    흑역사: 'SHAMEFUL_PAST',
  },
]

interface UploadInfo {
  category: string
  title: string
  desc: string
}

const Upload: React.FC<Props> = () => {
  const [uploadInfo, setUploadInfo] = useState<UploadInfo>({
    category: '여행',
    title: '',
    desc: '',
  })

  const onChangeTitle = (title: string) => {
    if (title.trim().length > 45) {
      return
    }
    setUploadInfo(prev => ({...prev, title}))
  }
  const onChangeDesc = (desc: string) => {
    if (desc.trim().length > 200) {
      return
    }
    setUploadInfo(prev => ({...prev, desc}))
  }

  return (
    <U.Container>
      <U.Title>게시할 그림의 정보를 입력해주세요.</U.Title>
      <U.SubTitle>· 추억 이미지</U.SubTitle>
      <U.SubTitle>· 추억 카테고리</U.SubTitle>
      <U.MonologCategories>
        {monologCategories.map(category => (
          <RadioBtn
            key={category}
            title={category}
            checked={category === uploadInfo.category}
            onClick={() => setUploadInfo(prev => ({...prev, category}))}
          />
        ))}
      </U.MonologCategories>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <U.SubTitleWithSubText>· 그림 제목</U.SubTitleWithSubText>
        <U.SubTitleSubText>{`(${uploadInfo.title.trim().length}/45자)`}</U.SubTitleSubText>
      </View>
      <U.InputBox style={{marginBottom: 24}}>
        <U.TextInput
          onChangeText={onChangeTitle}
          value={uploadInfo.title}
          placeholderTextColor='#FFF'
          placeholder='제목을 입력해주세요.'
        />
        <LinearGradient
          start={{x: 0.6, y: 0.1}}
          end={{x: 0.9, y: 1}}
          style={{width: 253, height: 1, marginBottom: 13}}
          colors={[COLORS.PURPLE_100, '#1D1D1D']}
        />
      </U.InputBox>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <U.SubTitleWithSubText>· 추가 설명</U.SubTitleWithSubText>
        <U.SubTitleSubText>{`(${uploadInfo.desc.trim().length}/200자)`}</U.SubTitleSubText>
      </View>
      <U.InputBox style={{marginBottom: 30}}>
        <U.TextInput
          onChangeText={onChangeDesc}
          value={uploadInfo.desc}
          placeholderTextColor='#FFF'
          placeholder='설명을 덧붙여주세요.'
          multiline
        />
        <LinearGradient
          start={{x: 0.6, y: 0.1}}
          end={{x: 0.9, y: 1}}
          style={{width: 253, height: 1, marginBottom: 13}}
          colors={[COLORS.PURPLE_100, '#1D1D1D']}
        />
      </U.InputBox>
      <CustomButton text='게시하기' textStyle={styles.customBtnText} style={styles.customBtn} />
    </U.Container>
  )
}

export default Upload

const styles = StyleSheet.create({
  customBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  customBtn: {
    width: '100%',
    height: 56,
    borderRadius: 42,
  },
})

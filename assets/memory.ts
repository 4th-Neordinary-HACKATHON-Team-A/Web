import { ImageSourcePropType } from 'react-native'

import Img1Src from '../assets/img/memories/img-1.png'
import Img2Src from '../assets/img/memories/img-2.png'
import Img3Src from '../assets/img/memories/img-3.png'
import Img4Src from '../assets/img/memories/img-4.png'
import Img5Src from '../assets/img/memories/img-5.png'
import Img6Src from '../assets/img/memories/img-6.png'
import Img7Src from '../assets/img/memories/img-7.png'
import Img8Src from '../assets/img/memories/img-8.png'
import Img9Src from '../assets/img/memories/img-9.png'
import Img10Src from '../assets/img/memories/img-10.png'

interface MemoryDataProps {
  uri?: string
  title?: string
  name: string
  time?: number
}

export const memoryData: MemoryDataProps[] = [
  {
    uri: Img1Src,
    title: '3점슛 첫 성공!',
    name: '조던 꿈나무',
    time: 1,
  },
  {
    uri: Img2Src,
    title: '창작의 고통',
    name: '피카소',
    time: 1,
  },
  {
    uri: Img3Src,
    title: '해운대였던 것 같은데',
    name: '내 머리 속에 지우개',
    time: 3,
  },
  {
    uri: Img4Src,
    title: '바다는 강원도지',
    name: '강릉 지킴이',
    time: 6,
  },
  {
    uri: Img5Src,
    title: '이런 놀이터 꼭 있었음',
    name: '말리부',
    time: 10,
  },
  {
    uri: Img6Src,
    title: '해 모양 손 본 적 있는 사람',
    name: '피리',
    time: 16,
  },
  {
    uri: Img7Src,
    title: '어릴 때 기묘한이야기 실사..',
    name: '할리우드액션',
    time: 30,
  },
  {
    uri: Img8Src,
    title: '아니 내 그림체랑 똑같아',
    name: '베이비',
    time: 41,
  },
  {
    uri: Img9Src,
    title: '동해 일출은 꼭 봐야해',
    name: '나그네',
    time: 49,
  },
  {
    uri: Img10Src,
    title: '핫도그파티 at 샌프란',
    name: '닥스훈트',
    time: 59,
  },
]

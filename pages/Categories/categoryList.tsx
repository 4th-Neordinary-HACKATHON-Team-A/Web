import {ImageSourcePropType} from 'react-native'
import 여행 from '../../assets/img/categories/여행.png'
import 성장통 from '../../assets/img/categories/성장통.png'
import 연애 from '../../assets/img/categories/연애.png'
import 이별 from '../../assets/img/categories/이별.png'
import 가족 from '../../assets/img/categories/가족.png'
import 우정 from '../../assets/img/categories/우정.png'
import 기념일 from '../../assets/img/categories/기념일.png'
import 흑역사 from '../../assets/img/categories/흑역사.png'
import 맛집 from '../../assets/img/categories/맛집.png'
import 성취 from '../../assets/img/categories/성취.png'
import 혼란 from '../../assets/img/categories/혼란.png'
import 신비 from '../../assets/img/categories/신비.png'

interface Category {
  imgSrc: ImageSourcePropType
  name: string
}

const categories: Category[] = [
  {imgSrc: 여행, name: '여행'},
  {imgSrc: 성장통, name: '성장통'},
  {imgSrc: 연애, name: '연애'},
  {imgSrc: 이별, name: '이별'},
  {imgSrc: 가족, name: '가족'},
  {imgSrc: 우정, name: '우정'},
  {imgSrc: 기념일, name: '기념일'},
  {imgSrc: 흑역사, name: '흑역사'},
  {imgSrc: 맛집, name: '맛집'},
  {imgSrc: 성취, name: '성취'},
  {imgSrc: 혼란, name: '혼란'},
  {imgSrc: 신비, name: '신비'},
]

export default categories

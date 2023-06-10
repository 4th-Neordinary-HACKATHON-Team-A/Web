import {StyleSheet} from 'react-native'
import {FontFamily} from '../types/fontFamily'
import COLORS from './colors'

export const commonStyles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: COLORS.BG_BLACK,
    color: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.pretendardBold,
    color: 'white',
  },
  titleWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

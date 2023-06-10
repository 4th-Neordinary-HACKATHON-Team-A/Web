import {StyleSheet} from 'react-native'

export const commonStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Pretendard-SemiBold',
  },
  titleWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

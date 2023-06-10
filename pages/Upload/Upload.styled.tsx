import styled from 'styled-components/native'
import COLORS from '../../styles/colors'

export const Container = styled.View`
  padding: 0 10px;
  backgroundColor: ${COLORS.BG_BLACK};
  color: 'white';
  flex: 1;
`

export const Title = styled.Text`
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`

export const SubTitle = styled.Text`
  margin-left: 2px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`

export const GeneratedImg = styled.Image`
  width: calc(100% - 72px);
`

export const MonologCategories = styled.View`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`

export const SubTitleWithSubText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`

export const SubTitleSubText = styled.Text`
  margin-left: 2px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
`

export const InputBox = styled.View`
  display: flex;
  justify-content: center;
`

export const TextInput = styled.TextInput`
  padding: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`

import styled from 'styled-components/native'
import COLORS from '../../../styles/colors'

export const RadioBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const SelectBtn = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 13px;
  border: 1px solid #fff;
  border-radius: 9999px;
`

export const CheckedCircle = styled.View`
  width: 9px;
  height: 9px;
  background-color: ${COLORS.PURPLE_100};
  border-radius: 9999px;
`

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`

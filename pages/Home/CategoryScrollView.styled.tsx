import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 37px;
`

export const Item = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  /* margin-right: 13px; */
`

export const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 57px;
  border-radius: 9999px;
  overflow: 'hidden';
`
export const Icon = styled.Image`
  width: 36px;
  height: 36px;
`
export const Name = styled.Text`
  color: white;
`

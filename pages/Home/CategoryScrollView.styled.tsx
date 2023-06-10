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

export const Icon = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  overflow: 'hidden';
`
export const Name = styled.Text`
  color: white;
`

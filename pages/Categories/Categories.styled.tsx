import styled from 'styled-components/native'

export const Container = styled.View``

export const Title = styled.Text`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`

export const Main = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`

export const Item = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Icon = styled.Image`
  width: 80px;
  height: 80px;
`

export const Name = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
`

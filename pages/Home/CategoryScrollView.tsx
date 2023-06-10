import React from 'react'
import styled from 'styled-components/native'
import categories from './categories'
import {Image, ScrollView} from 'react-native'

const CategoryScrollView = () => {
  return (
    <Container>
      <ScrollView horizontal contentContainerStyle={{columnGap: 13}}>
        {categories.map(category => (
          <Item key={category.name}>
            <IconWrapper>
              <Icon source={category.imgSrc} resizeMode='cover' />
            </IconWrapper>
            <Name>{category.name}</Name>
          </Item>
        ))}
      </ScrollView>
    </Container>
  )
}

const Container = styled.View`
  margin-bottom: 37px;
`

const Item = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  /* margin-right: 13px; */
`

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 57px;
  border-radius: 9999px;
  overflow: 'hidden';
`
const Icon = styled.Image`
  width: 36px;
  height: 36px;
`
const Name = styled.Text`
  color: white;
`

export default CategoryScrollView

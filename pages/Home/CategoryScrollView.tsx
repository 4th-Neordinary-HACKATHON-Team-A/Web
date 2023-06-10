import React from 'react'
import * as C from './CategoryScrollView.styled'
import categories from '../Categories/categoryList'
import {ScrollView} from 'react-native'

const CategoryScrollView = () => {
  return (
    <C.Container>
      <ScrollView horizontal contentContainerStyle={{columnGap: 13}}>
        {categories.map(category => (
          <C.Item key={category.name}>
            <C.IconWrapper>
              <C.Icon source={category.imgSrc} resizeMode='cover' />
            </C.IconWrapper>
            <C.Name>{category.name}</C.Name>
          </C.Item>
        ))}
      </ScrollView>
    </C.Container>
  )
}

export default CategoryScrollView

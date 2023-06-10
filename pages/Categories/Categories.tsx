import React from 'react'
import * as C from './Categories.styled'
import categories from './categoryList'

const Categories = () => {
  return (
    <C.Container>
      <C.Title>🔗 카테고리</C.Title>
      <C.Main>
        {categories.map(category => (
          <C.Item>
            <C.Icon source={category.imgSrc} />
            <C.Name>{category.name}</C.Name>
          </C.Item>
        ))}
      </C.Main>
    </C.Container>
  )
}

export default Categories

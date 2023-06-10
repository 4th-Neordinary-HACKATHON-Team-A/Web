import React from 'react'
import * as R from './RadioBtn.styled'

interface Props {
  title: string
  checked: boolean
  onClick: (category: string) => void
}

const RadioBtn: React.FC<Props> = ({title, checked, onClick}) => {
  return (
    <R.RadioBtn onPress={() => onClick(title)}>
      <R.SelectBtn>{checked && <R.CheckedCircle />}</R.SelectBtn>
      <R.Title>{title}</R.Title>
    </R.RadioBtn>
  )
}

export default RadioBtn

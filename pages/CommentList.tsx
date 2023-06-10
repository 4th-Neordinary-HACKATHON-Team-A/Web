import React from 'react'
import * as C from './Comment.styled'
import {FlatList} from 'react-native'
import CommentIco from '../assets/svg/CommentIcon'

interface Props {
  comments: {
    title: string
    desc: string
  }[]
}

const CommentList: React.FC<Props> = ({comments}) => {
  return (
    <C.CommentList>
      <FlatList data={comments} renderItem={({item}) => <CommentItem title={item.title} desc={item.desc} />}></FlatList>
    </C.CommentList>
  )
}

const CommentItem = ({title, desc}: {title: string; desc: string}) => {
  return (
    <C.CommentItem>
      <CommentIco />
      <C.CommentItemTextWrapper>
        <C.CommentItemTitle>{title}</C.CommentItemTitle>
        <C.CommentItemDesc>{desc}</C.CommentItemDesc>
      </C.CommentItemTextWrapper>
    </C.CommentItem>
  )
}

export default CommentList

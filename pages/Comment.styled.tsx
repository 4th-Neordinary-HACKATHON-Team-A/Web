import styled from 'styled-components/native'

export const CommentList = styled.View``
export const CommentItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  margin-bottom: 10px;
`

export const CommentItemTextWrapper = styled.View`
  display: flex;
  justify-content: center;
`

export const CommentItemTitle = styled.Text`
  font-size: 11px;
  font-weight: 600;
  color: #c9c9c9;
`

export const CommentItemDesc = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`

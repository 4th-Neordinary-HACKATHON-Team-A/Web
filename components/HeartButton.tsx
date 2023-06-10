import React from 'react'
import {Pressable, Text, StyleSheet, Image, GestureResponderEvent} from 'react-native'
import HeartIcon from '../assets/img/ic-empty-like.png'
import EmptyHeartIcon from '../assets/img/ic-full-like.png'
interface HeartButtonProps {
  like?: boolean
  onPress?: (e: GestureResponderEvent) => void
}
const HeartButton = ({ like, onPress }: HeartButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={like ? HeartIcon : EmptyHeartIcon} style={styles.likeButton} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  likeButton: {
    width: 20,
    height: 20,
  },
})

export default HeartButton
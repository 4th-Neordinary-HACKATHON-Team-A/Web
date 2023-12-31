import * as React from 'react'
import Svg, {Circle, ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

export default function ChatIcon(props) {
  return (
    <Svg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <G clip-path='url(#clip0_32_2227)'>
        <Path
          d='M30.4567 23.0312C33.8478 19.64 33.8478 14.133 30.4567 10.7419C28.8824 9.16761 26.8568 8.32688 24.7916 8.20839C24.6788 6.14888 23.8324 4.11759 22.2581 2.54334C18.867 -0.847782 13.36 -0.847782 9.96884 2.54334C8.57515 3.93704 7.75135 5.69184 7.50308 7.50308C5.6862 7.75135 3.93704 8.5695 2.54334 9.96884C-0.847782 13.36 -0.847782 18.867 2.54334 22.2581C4.11759 23.8324 6.14324 24.6731 8.20839 24.7916C8.32124 26.8511 9.16761 28.8824 10.7419 30.4567C14.133 33.8478 19.64 33.8478 23.0312 30.4567C24.4249 29.063 25.2487 27.3082 25.4969 25.4969C27.3138 25.2487 29.063 24.4305 30.4567 23.0312Z'
          fill='#CEC1FF'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_32_2227'>
          <Rect width='33' height='33' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

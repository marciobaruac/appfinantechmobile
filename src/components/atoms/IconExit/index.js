import React from 'react'
import { CustomImages } from './styles'
import Exit from '../../../../assets/Exit.png'


export const IconExit = ({ size, marginTop }) => {
  return (
    <CustomImages source={Exit} size={size} marginTop={marginTop} />
  )
} 
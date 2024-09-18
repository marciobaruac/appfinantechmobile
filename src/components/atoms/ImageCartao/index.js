import React from 'react'
import { CustomImages } from './styles'
import CartaoImage from '../../../../assets/CartaoImage.png'


export const ImageCartao = ({ size, marginTop }) => {
  return (
    <CustomImages source={CartaoImage} size={size} marginTop={marginTop} />
  )
} 
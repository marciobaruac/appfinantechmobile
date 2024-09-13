import React from 'react'
import { CustomImages } from './styles'
import logoImage from '../../../../assets/Logo.png'


export const Logo = ({ size, marginTop }) => {
  return (
    <CustomImages source={logoImage} size={size} marginTop={marginTop} />
  )
} 
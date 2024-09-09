import React from 'react'
import { CustomImages } from './styles'
import logoImage from '../../../../assets/Logo.png'


export const Logo = ({ size }) => {
  return (
    <CustomImages source={logoImage} size={size} />
  )
} 
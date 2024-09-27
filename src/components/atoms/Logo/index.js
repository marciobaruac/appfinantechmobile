import React from 'react'
import { CustomImages } from './styles'
import logoImage from '../../../../assets/Logo.png'
import { Container } from '../Container'


export const Logo = ({ ...props }) => {
  const { justify, align, width, bgColor, size, marginTop, height, marginLeft } = props

  return (
    <Container justify={justify} align={align} bgColor={bgColor} width={width} height={height}>
      <CustomImages source={logoImage} size={size} marginTop={marginTop} />
    </Container>
  )
} 
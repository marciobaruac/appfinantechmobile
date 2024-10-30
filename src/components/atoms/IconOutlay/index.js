import React from 'react'
import { CustomImages } from './styles'
import iconOutlay from '../../../../assets/Outlay.png'
import { Container } from '../Container'


export const IconOutlay = ({ ...props }) => {
  const { justify, align, width, bgColor, size, marginTop, height, marginLeft } = props

  return (
    <Container justify={justify} align={align} bgColor={bgColor} width={width} height={height}>
      <CustomImages source={iconOutlay} size={size} marginTop={marginTop} />
    </Container>
  )
} 
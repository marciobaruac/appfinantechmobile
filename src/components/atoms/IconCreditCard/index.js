import React from 'react'
import { CustomImages } from './styles'
import CreditCard from '../../../../assets/CreditCard.png'


export const IconCreditCard = ({ size, marginTop }) => {
  return (
    <CustomImages source={CreditCard} size={size} marginTop={marginTop} />
  )
} 
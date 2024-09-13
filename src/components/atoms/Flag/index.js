import React from 'react'
import { CustomImages } from './styles'

import MasterCard from '../../../../assets/MasterCard_Icon.png'
import Visa from '../../../../assets/Visa_Icon.png'
import Elo from '../../../../assets/Elo_Icon.png'
import AmericanExpress from '../../../../assets/AmericanExpress_icon.png'

const images = {
  MasterCard: MasterCard,
  Visa: Visa,
  Elo: Elo,
  AmericanExpress: AmericanExpress,
}

export const Flag = ({ type, ...props }) => {


  return (
    <CustomImages source={images[type]} {...props} />
  )
} 
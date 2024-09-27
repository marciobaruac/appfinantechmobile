import React from 'react'
import { CustomImages } from './styles'
import AlertIcon from '../../../../assets/AlertIcon.png'

export const IconNotification = ({ size, marginTop }) => {
    return (
        <CustomImages source={AlertIcon} size={size} marginTop={marginTop} />
    )
}
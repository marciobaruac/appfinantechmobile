import React from 'react';

import { ButtonBox } from './styles';
import { Logo } from '../../atoms';

export const ButtonLogo = ({ onPress, ...props }) => {
    const { justify, align, width, bgColor, size, marginTop, height } = props

    return (
        <ButtonBox width='43' height='32' justify='center' align='center' activeOpacity={0.8} onPress={onPress}>
            <Logo size={size} justify={justify} align={align} bgColor={bgColor} width={width} height={height} />
        </ButtonBox>
    );
}

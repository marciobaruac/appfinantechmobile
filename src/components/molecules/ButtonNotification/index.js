import React from 'react';

import { ButtonBox } from './styles';
import { IconNotification } from '../../atoms';

export const ButtonNotification = ({ onPress }) => {
    return (
        <ButtonBox width='43' height='32' justify='center' align='center' activeOpacity={0.8} onPress={onPress}>
            <IconNotification size={32} />
        </ButtonBox>
    );
}

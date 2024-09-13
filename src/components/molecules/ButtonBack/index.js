import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import { ButtonBox } from './styles';

export const ButtonBack = ({ onPress }) => {
    return (
        <ButtonBox width='43' height='32' justify='center' align='center' onPress={onPress}>
            <Icon name="chevron-left" size={40} color='#FF9C00' />
        </ButtonBox>
    );
}

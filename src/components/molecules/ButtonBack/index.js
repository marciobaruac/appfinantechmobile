import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { ButtonBox } from './styles';

export const ButtonBack = ({ onPress }) => {
    return (
        <ButtonBox style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }} width='43' height='32' justify='center' align='center' onPress={onPress}>
            <Icon name="chevron-left" size={40} color='#FF9C00' />
        </ButtonBox>
    );
}

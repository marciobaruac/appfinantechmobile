import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import DropShadow from 'react-native-drop-shadow';

import { ButtonBox } from './styles';

export const ButtonBack = ({ onPress }) => {
    return (
        <DropShadow
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 2,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            }}
        >
            <ButtonBox width='43' height='32' justify='center' align='center' onPress={onPress}>
                <Icon name="chevron-left" size={40} color='#FF9C00' />
            </ButtonBox>
        </DropShadow>
    );
}

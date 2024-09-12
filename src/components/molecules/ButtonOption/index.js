import React from 'react';
import { TouchableOpacity } from 'react-native'

import { Container, IconOption } from '../../atoms';

export const ButtonOption = ({ onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Container height='30' width='30' justify='center' align='center' radius='15'>
                <IconOption />
            </Container>
        </TouchableOpacity>

    );
};


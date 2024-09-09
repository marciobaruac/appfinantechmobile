import React from 'react';
import { TouchableOpacity } from 'react-native'

import { Container, IconEdit } from '../../atoms';

export const ButtonEdit = () => {

    return (
        <TouchableOpacity>
            <Container height='30' width='30' justify='center' align='center' radius='15'>
                <IconEdit />
            </Container>
        </TouchableOpacity>

    );
};


import React from 'react';
import { TouchableOpacity } from 'react-native'

import { Container, IconEdit } from '../../atoms';
import { useNavigation } from '@react-navigation/native';

export const ButtonEdit = ({ objetoId }) => {
    const navigation = useNavigation()

    const handlePress = () => {

        navigation.navigate('Create', { objetoId: objetoId });
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.5} >
            <Container height='45' width='40' justify='center' align='center' radius='10' style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 2,
                    height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
                borderRadius: 10,
                elevation: 6
            }}>
                <IconEdit />
            </Container>
        </TouchableOpacity>


    );
};


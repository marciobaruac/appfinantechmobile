import React from 'react';
import { TouchableOpacity } from 'react-native'
import DropShadow from 'react-native-drop-shadow';

import { Container, IconEdit } from '../../atoms';
import { useNavigation } from '@react-navigation/native';

export const ButtonEdit = ({ cartaoId }) => {
    const navigation = useNavigation()

    const handlePress = () => {

        navigation.navigate('Create', { cartaoId: cartaoId });
    };

    return (
        <DropShadow
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 2,
                    height: 5,
                },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 5
            }}
        >
            <TouchableOpacity onPress={handlePress} activeOpacity={0.5} >
                <Container height='40' width='40' justify='center' align='center' radius='10'>
                    <IconEdit />
                </Container>
            </TouchableOpacity>
        </DropShadow>


    );
};


import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, IconEdit } from '../../atoms';
import API from '../../../helpers/api';


export const ButtonEdit = ({ objetoId, ...props }) => {

    const [cartao, setCartao] = useState('');

    const navigation = useNavigation();

    /* Requisições */

    const fetchCartaoData = async (id) => {
        try {
            const response = await API.get(`/api/cartoes/edit/${id}`);
            setCartao(response.data.response.nome);
        } catch (error) {
            console.error('Erro ao buscar os dados do cartão:', error);
            Alert.alert('Erro', 'Não foi possível carregar os dados do cartão.');
        }
    };

    useEffect(() => {
        fetchCartaoData(objetoId)
    }, [])


    const handlePress = () => {
        if (props.screen === 'Cartoes' && objetoId && cartao) {
            navigation.navigate('Create', { objetoId, cartao });
        }
    };


    return (
        props.screen === 'Cartoes' && (
            <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
                <Container
                    height='45'
                    width='40'
                    justify='center'
                    align='center'
                    radius='10'
                    style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 2, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        borderRadius: 10,
                        elevation: 6
                    }}
                >
                    <IconEdit />
                </Container>
            </TouchableOpacity>
        )
    );
};

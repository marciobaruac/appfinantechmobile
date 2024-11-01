import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import API from '../../../helpers/api';

import { Container, IconDelete } from '../../atoms';

export const ButtonDelete = ({ objetoId, onRefresh }) => {

    const handleDelete = async () => {
        Alert.alert(
            'Confirmar Deleção',
            'Você tem certeza de que deseja deletar este cartão?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Deleção cancelada'),
                    style: 'cancel',
                },
                {
                    text: 'Deletar',
                    onPress: async () => {
                        try {

                            const response = await API.get(`/api/cartoes/delete/${objetoId}`);

                            Alert.alert('Sucesso', 'Cartão deletado com sucesso.');

                            onRefresh();
                        } catch (error) {
                            console.error('Erro ao deletar o cartão:', error);

                            Alert.alert('Erro', 'Não foi possível deletar o cartão.');
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (

        <TouchableOpacity onPress={handleDelete} activeOpacity={0.5}>
            <Container height='45' width='40' justify='center' align='center' radius='10' marginLeft='10' style={{
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
                <IconDelete />
            </Container>
        </TouchableOpacity>
    );
};

import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Alert, Image } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import API from '../../helpers/api';

import { Container, Text, ButtonBack } from '../../components';
import { styles, Input, ButtonAdd } from './styles';

export const CreateScreen = ({ route, navigation }) => {
    const { cartaoId } = route.params || {};
    const [cartao, setCartao] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (cartaoId) {

            setIsEditing(true);
            fetchCartaoData(cartaoId);
        }
    }, [cartaoId]);

    const fetchCartaoData = async (id) => {
        try {
            const response = await API.get(`/cartoes/edit/${id}`);
            setCartao(response.data.nome);
        } catch (error) {
            console.error('Erro ao buscar os dados do cartão:', error);
            Alert.alert('Erro', 'Não foi possível carregar os dados do cartão.');
        }
    };


    const handleCreateOrEdit = async () => {
        if (cartao.trim() === '') {
            Alert.alert('Erro', 'O campo nome não pode estar vazio.');
            return;
        }

        const axiosPut = async () => {
            try {

                await API.put(`/cartoes/update/${cartaoId}`, { nome: cartao });

            } catch (error) {
                return Alert.alert('Erro', 'Nome do cartão já existe')
            }
        }

        try {
            if (isEditing) {

                axiosPut()

                navigation.navigate('Cartoes', { shouldRefresh: true });

            }

            if (!isEditing) {
                await API.post(`/cartoes/create`, { nome: cartao });
                Alert.alert('Sucesso', 'Cartão criado com sucesso.');

                navigation.navigate('Cartoes', { shouldRefresh: true });
            }




        } catch (error) {
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.errors;
                let errorMessage = 'Erro ao salvar o cartão.';

                if (errors && errors.nome) {
                    errorMessage = errors.nome[0];
                }

                Alert.alert('Erro', errorMessage);
            } else {
                Alert.alert('Erro', 'Ocorreu um erro inesperado.');
            }

            console.error('Erro na requisição:', error);
        }

    };



    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <Container padTop='35'>
            <View style={styles.container}>
                <ButtonBack onPress={() => navigation.navigate('Cartoes')} />
                <Text size='32' color='black' fontFamily='RobotoBold'>
                    {isEditing ? 'Editar Cartão' : 'Novo Cartão'}
                </Text>
            </View>

            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <>
                    <Container align='center' padTop='80'>
                        <DropShadow
                            style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 2,
                                    height: 4,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 5,
                                borderRadius: 10,
                                elevation: 5,
                            }}
                        >
                            <Container width='305' height='58' justify='center' radius='15'>
                                <Input
                                    placeholder="Nome"
                                    placeholderTextColor="grey"
                                    value={cartao}
                                    onChangeText={setCartao}
                                />
                            </Container>

                            <ButtonAdd onPress={handleCreateOrEdit}>
                                <Text fontFamily='RobotoBold' size='18'>
                                    {isEditing ? 'Salvar Alterações' : 'Adicionar'}
                                </Text>
                            </ButtonAdd>
                        </DropShadow>
                    </Container>

                </>
            </TouchableWithoutFeedback>
        </Container>
    );
};

import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import axios from 'axios';

import { Container, Text, ButtonBack, ButtonOptions } from '../../components';
import { styles, Input, ButtonAdd } from './styles';
import { API_URL } from '../../helpers/config';


export const CreateScreen = ({ navigation }) => {
    const [cartao, setCartao] = useState('');

    const handleCreate = async () => {
        try {
            const response = axios.post(`${API_URL}/cartoes/create`, {
                nome: cartao,
            })

            navigation.navigate('Cartoes', { shouldRefresh: true });

        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Ocorreu um erro ao registrar o cartão.');
        }

    }

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <Container padTop='35'>
            <View style={styles.container}>
                <ButtonBack onPress={() => navigation.navigate('Cartoes')} />
                <Text size='32' color='black' fontFamily='RobotoBold'>Novo Cartão</Text>
            </View>

            <TouchableWithoutFeedback onPress={dismissKeyboard}>
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

                        <ButtonAdd onPress={handleCreate}>
                            <Text fontFamily='RobotoBold' size='18'>Adicionar</Text>
                        </ButtonAdd>

                        <ButtonOptions />

                    </DropShadow>
                </Container>
            </TouchableWithoutFeedback>

        </Container>
    );
}

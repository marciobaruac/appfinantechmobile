import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert, Platform, View } from 'react-native';
import API from '../../helpers/api';

import { Container, Text, ButtonBack, ImageCartao, Logo } from '../../components';
import { Input, ButtonAdd, styles } from './styles';

export const CreateScreen = ({ route, navigation }) => {
    const cartaoId = route.params?.objetoId;
    const [cartao, setCartao] = useState(route.params?.cartao || '');

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (cartaoId) {

            setIsEditing(true);
        }
    }, [cartaoId]);


    const handleCreateOrEdit = async () => {
        if (cartao.trim() === '') {
            Alert.alert('Erro', 'O campo nome não pode estar vazio.');
            return;
        }

        const axiosPut = async () => {
            try {

                await API.put(`/api/cartoes/update/${cartaoId}`, { nome: cartao });

                return Alert.alert('Sucesso', 'Dados do cartão foi alterado com sucesso')

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
                await API.post("/api/cartoes/create", { nome: cartao });
                Alert.alert('Sucesso', 'Cartão criado com sucesso.');

                navigation.navigate('Cartoes', { shouldRefresh: true });
            }




        } catch (error) {
            if (error.response && error.response.status === 400) {


                Alert.alert('Erro', 'Já existe um cartão com este nome.');
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
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <Container >
                <Container flexDir='row' bgColor='#0F1B28' height='70' padLeft='10'>
                    <View style={{ marginTop: 7 }}>
                        <ButtonBack onPress={() => navigation.navigate('Cartoes')} />
                    </View>
                    <Text marginLeft='38' size='32' fontFamily='RobotoBold'>
                        {isEditing ? 'Editar Cartão' : 'Novo Cartão'}
                    </Text>
                </Container>


                <>
                    <Container align='center' padTop='50' >

                        <Container width='305' height='60' justify='center' radius='15' style={styles.shadow}>
                            <Input

                                placeholder="Nome"
                                placeholderTextColor="grey"
                                maxLength={20}
                                value={cartao}
                                onChangeText={setCartao}
                            />
                        </Container>

                        <ButtonAdd onPress={handleCreateOrEdit} >
                            <Text fontFamily='RobotoBold' size='18'>
                                {isEditing ? 'Salvar Alterações' : 'Adicionar'}
                            </Text>
                        </ButtonAdd>

                        <ImageCartao size='328' marginTop='10' />

                        <Logo marginTop='70' width='20' />
                    </Container>

                </>

            </Container>
        </TouchableWithoutFeedback>
    );
};

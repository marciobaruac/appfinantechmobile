import React, { useState } from 'react';
import { TextInput, Button, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import API from '../../helpers/api';

import { Container } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({ navigation }) => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await API.post(`/api/users/login`, {
                email: email,
                password: password,
            });

            if (response.data.token) {

                await AsyncStorage.setItem('token', response.data.token)


                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }]
                })
            } else {
                Alert.alert('Erro', 'Usuário ou senha incorretos.');
            }

        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                // Erro de credenciais inválidas
                Alert.alert('Erro', 'Usuário ou senha incorretos.');
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
            }
        }
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <Container align="center" justify="center" bgColor="#0F1B28">
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="gray"
                    value={email}
                    onChangeText={setemail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} />
            </Container>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 13,
        color: 'white',
    },
});

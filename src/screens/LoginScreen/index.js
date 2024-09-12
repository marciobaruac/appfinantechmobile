import React, { useState } from 'react';
import { TextInput, Button, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import API from '../../helpers/api';

import { Container } from '../../components';
import { API_URL } from '../../helpers/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await API.post(`${API_URL}/login/request`, {
                login: username,
                senha: password,
            });

            if (response.data.token) {
                await AsyncStorage.setItem('token', response.data.token)
                await AsyncStorage.setItem('csrfToken', response.data.csrf_token || '')

                // Login bem-sucedido, navega para a próxima tela
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Cartoes' }]
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
                    placeholder="Username"
                    placeholderTextColor="gray"
                    value={username}
                    onChangeText={setUsername}
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

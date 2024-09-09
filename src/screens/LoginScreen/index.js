import React, { useState } from 'react';
import { TextInput, Button, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';

import { Container } from '../../components';
import { API_URL } from '../../helpers/config';

export const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/login/request`, {
                login: username,
                senha: password,
            });

            navigation.navigate('Cartoes');

        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login');
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
        color: 'white'
    }
});

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from './config';  // Importa a URL da API

// Cria a instância do Axios
const API = axios.create({
    baseURL: API_URL,
    headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
    }
});

// Interceptador para adicionar o token de autenticação
API.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject('Erro na API Axios: ', error);
    }
);

export default API;

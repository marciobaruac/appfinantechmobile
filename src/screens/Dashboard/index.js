import React, { useState, useCallback } from 'react';
import { SectionList, RefreshControl, Platform, Pressable, View, StyleSheet } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { CarouselField, Container } from '../../components';
import { HeaderDashboard } from '../../components';
import API from '../../helpers/api';

export const Dashboard = () => {
    const [pressed, setPressed] = useState(false);
    const navigation = useNavigation();

    const [cartoes, setCartoes] = useState([]);
    const [despesas, setDespesas] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchCartoes = async () => {
        try {
            const response = await API.get('/api/cartoes');
            setCartoes(Array.isArray(response.data.cartoes) ? response.data.cartoes : []);
        } catch (error) {
            console.error('Erro ao retornar a lista de cartões:', error.response ? error.response.data : error.message);
        }
    };

    const fetchDespesas = async (id = null) => {
        try {
            const url = id ? `/api/despesas/${id}` : '/api/despesas';
            const response = await API.get(url);
            setDespesas(Array.isArray(response.data.response) ? response.data.response : []);
        } catch (error) {
            console.error('Erro ao retornar a lista de despesas:', error.response ? error.response.data : error.message);
        }
    };

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchCartoes();
        await fetchDespesas();
        setRefreshing(false);
    }, []);

    useFocusEffect(
        useCallback(() => {
            const refreshOnFocus = async () => {
                await fetchCartoes();
                await fetchDespesas();
            };
            refreshOnFocus();
        }, [])
    );

    const sections = [
        { key: 'carousel', data: [{}] }
    ];

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.header}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
            >
                <Container zIndex='1' align='center' height='100' bgColor='#0F1B28'>
                    <HeaderDashboard pressed={pressed} navigation={navigation} />
                </Container>
            </Pressable>

            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item.key + index}
                renderItem={({ section }) => (
                    <Container bgColor='#F8F8F8' height='190'>
                        <CarouselField cartoes={cartoes} despesas={despesas} />
                    </Container>
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1,
    },
    listContent: {
        marginTop: 110, // Ajuste conforme a altura do Header
    },
});

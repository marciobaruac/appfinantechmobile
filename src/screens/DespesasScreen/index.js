import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, RefreshControl, Platform, View } from 'react-native';
import { useFocusEffect, useRoute } from '@react-navigation/native';

import { Text, Container, ButtonBack } from '../../components';
import { CardSection, SubmitButton } from '../../components/organisms';
import API from '../../helpers/api';

export const DespesasScreen = ({ navigation }) => {
    const route = useRoute()
    const cartaoId = route.params?.objetoId

    const [despesas, setdespesas] = useState([]);
    const [resetCard, setResetCard] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [categorias, setCategorias] = useState([])

    const fetchdespesas = async () => {
        try {
            const response = await API.get(`/api/despesas/${cartaoId}`);
            if (Array.isArray(response.data.response)) {


                setdespesas(response.data.response);

            } else {
                setdespesas([]);
            }
        } catch (error) {
            console.error('Erro ao retornar a lista de despesas:', error.response ? error.response.data : error.message);
        }
    };


    const fetchCategoria = async () => {
        try {
            const response = await API.get('/api/categoriaDespesas');
            if (Array.isArray(response.data.response)) {

                setCategorias(response.data.response);


            } else {
                setCategorias([]);
            }
        } catch (error) {
            console.error('Erro ao retornar a lista de categorias:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        fetchCategoria()

    }, [])


    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchdespesas();
        setRefreshing(false);
    }, []);

    useFocusEffect(
        useCallback(() => {
            const refreshOnFocus = async () => {
                await fetchdespesas();
            };
            refreshOnFocus();
        }, [])
    );

    const handleOutsidePress = () => {
        setResetCard(true);
        setTimeout(() => setResetCard(false), 100);
        Keyboard.dismiss();
    };


    return (
        <>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <TouchableWithoutFeedback onPress={handleOutsidePress}>
                    <Container align="center" padBottom="80" radius="12">
                        <Container flexDir='row' height='70' bgColor='#0F1B28'>
                            <View style={{ marginLeft: 12, marginTop: 8 }}>
                                <ButtonBack onPress={() => navigation.navigate('Dashboard')} />
                            </View>
                            <Text size="35" marginLeft='40' fontFamily="RobotoBold">Despesas</Text>
                        </Container>

                        {Array.isArray(despesas) && despesas.length > 0 ? (
                            despesas.map((despesa) => (

                                < CardSection key={despesa.id}
                                    categoria={categorias.find(categoria => categoria.id === despesa.dreconta_id) || {}} cartaoId={cartaoId}
                                    objetoId={despesa.id} screen='Despesas' nome={despesa.referencia} valor={despesa.valor_integral}
                                    emissao={despesa.data_emissao} onReset={resetCard} onRefresh={onRefresh} />
                            ))
                        ) : (
                            <Text marginTop='30' color="gray" size="18">Nenhuma despesa disponível</Text>
                        )}
                    </Container>
                </TouchableWithoutFeedback>


            </ScrollView>
            <SubmitButton cartaoId={cartaoId} screen='despesas' navigation={navigation} />
        </>
    );
};
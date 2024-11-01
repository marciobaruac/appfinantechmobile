import React, { useState, useCallback } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, RefreshControl, Platform, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Text, Container, ButtonBack } from '../../components';
import { CardSection, SubmitButton } from '../../components/organisms';
import API from '../../helpers/api';

export const CartoesScreen = ({ navigation }) => {
  const [cartoes, setCartoes] = useState([]);
  const [resetCard, setResetCard] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCartoes = async () => {
    try {
      const response = await API.get('/api/cartoes');
      if (Array.isArray(response.data.cartoes)) {

        setCartoes(response.data.cartoes);
      } else {
        setCartoes([]);
      }
    } catch (error) {
      console.error('Erro ao retornar a lista de cartões:', error.response ? error.response.data : error.message);
    }
  };


  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCartoes();
    setRefreshing(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      const refreshOnFocus = async () => {
        await fetchCartoes();
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
              <View style={{ marginLeft: 12, marginTop: 9 }}>
                <ButtonBack onPress={() => navigation.navigate('Dashboard')} />
              </View>
              <Text size="35" marginLeft='50' fontFamily="RobotoBold">Cartões</Text>
            </Container>

            {Array.isArray(cartoes) && cartoes.length > 0 ? (
              cartoes.map((cartao) => (
                <CardSection key={cartao.id} objetoId={cartao.id} screen='Cartoes' nome={cartao.nome} onReset={resetCard} onRefresh={onRefresh} />
              ))
            ) : (
              <Text marginTop='30' color="gray" size="18">Nenhum cartão disponível</Text>
            )}
          </Container>
        </TouchableWithoutFeedback>


      </ScrollView>
      <SubmitButton screen='cartoes' navigation={navigation} />
    </>
  );
};
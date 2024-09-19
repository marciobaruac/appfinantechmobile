import React, { useState, useCallback } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, RefreshControl, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Text, Container } from '../../components';
import { CardSection, SubmitButton } from '../../components/organisms';
import API from '../../helpers/api';

export const CartoesScreen = ({ navigation }) => {
  const [cartoes, setCartoes] = useState([]);
  const [resetCard, setResetCard] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCartoes = async () => {
    try {
      const response = await API.get(`/api/cartoes`);
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
            <Container align='center' justify='center' height={Platform.OS === 'ios' ? 25 : 20} bgColor='#0F1B28'>
              <Text size="35" marginTop={Platform.OS === 'ios' ? 15 : 0} fontFamily="RobotoBold">Cartões</Text>
            </Container>

            {Array.isArray(cartoes) && cartoes.length > 0 ? (
              cartoes.map((cartao) => (
                <CardSection key={cartao.id} cartaoId={cartao.id} nome={cartao.nome} onReset={resetCard} onRefresh={onRefresh} />
              ))
            ) : (
              <Text marginTop='30' color="gray" size="18">Nenhum cartão disponível</Text> // Exibe mensagem caso a lista esteja vazia
            )}
          </Container>
        </TouchableWithoutFeedback>


      </ScrollView>
      <SubmitButton navigation={navigation} />
    </>
  );
};

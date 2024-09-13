import React, { useState, useCallback } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

import { Text, Container } from '../../components';
import { CardSection, SubmitButton } from '../../components/organisms';
import API from '../../helpers/api';

export const CartoesScreen = ({ navigation }) => {
  const [cartoes, setCartoes] = useState([]);
  const [resetCard, setResetCard] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCartoes = async () => {
    try {
      const response = await API.get(`/cartoes`);
      if (Array.isArray(response.data)) {

        setCartoes(response.data);
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
          <Container align="center" padBottom="50" radius="12">
            <Container align='center' justify='center' height='142' bgColor='#0F1B28'>
              <Text marginTop='20' size="35" fontFamily="RobotoBold">Cartões</Text>
            </Container>


            {/* Verificação se cartoes é um array antes de usar map */}
            {Array.isArray(cartoes) && cartoes.length > 0 ? (
              cartoes.map((cartao) => (
                <CardSection key={cartao.id} cartaoId={cartao.id} nome={cartao.nome} onReset={resetCard} onRefresh={onRefresh} />
              ))
            ) : (
              <Text marginTop='30' color="gray" size="18">Nenhum cartão disponível</Text> // Exibe mensagem caso a lista esteja vazia
            )}
          </Container>
        </TouchableWithoutFeedback>

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
          {/* Add content inside DropShadow if needed */}
        </DropShadow>
      </ScrollView>
      <SubmitButton navigation={navigation} />
    </>
  );
};

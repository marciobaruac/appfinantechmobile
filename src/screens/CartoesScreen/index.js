import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

import { Text, Container } from '../../components';
import { CardSection, SubmitButton } from '../../components/organisms';
import { API_URL } from '../../helpers/config';

export const CartoesScreen = ({ navigation }) => {

  const [cartoes, setCartoes] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchCartoes = async () => {
        try {
          const response = await axios.get(`${API_URL}/cartoes`);
          setCartoes(response.data);
        } catch (error) {
          console.error('Erro ao retornar a lista de cartões', error);
        }
      };

      fetchCartoes();
    }, [])
  );




  return (

    <>
      <ScrollView>
        <Container padTop="40" align="center" padBottom='50' radius='12'>
          <Text color="black" size="35" fontFamily="RobotoBold">Cartões</Text>

          {cartoes.map((cartao) => (
            <CardSection key={cartao.id} nome={cartao.nome} />
          ))}

        </Container>
      </ScrollView>
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
        <SubmitButton navigation={navigation} />
      </DropShadow>

    </>

  );
}

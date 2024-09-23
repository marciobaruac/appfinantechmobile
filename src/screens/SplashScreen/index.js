import React, { useEffect } from 'react';

import { Text, Container, Logo } from '../../components';

export const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
    }, 3000)
  }, [])

  return (
    <Container justify="center" align="center" bgColor="#0F1B28">
      <Logo size="150" />

      <Text marginTop='7' size="30" fontFamily="LatoBold">
        Smart

        <Text size="30" marginTop='7' fontFamily="LatoLight">
          Finantech

        </Text>
      </Text>

      <Text color="#FF9C00" fontFamily="MichromaRegular">TECNOLOGIA FINANCEIRA</Text>

    </Container>
  );
}
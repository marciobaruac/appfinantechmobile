import React from 'react';
import { ButtonAdd } from '../../molecules';
import { Container } from '../../atoms';

export const SubmitButton = ({ navigation, ...props }) => {

    return (

        <Container height='15'>
            {props.screen === 'cartoes' ? (
                <ButtonAdd onPress={() => navigation.navigate('Create')} />

            ) : null}

            {props.screen === 'despesas' ? (
                <ButtonAdd onPress={() => navigation.navigate('CreateDespesas')} />

            ) : null}

        </Container>
    );
}

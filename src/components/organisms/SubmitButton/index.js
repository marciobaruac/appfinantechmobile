import React from 'react';
import { ButtonAdd } from '../../molecules';

export const SubmitButton = ({ navigation }) => {

    return (
        <ButtonAdd onPress={() => navigation.navigate('Create')} />
    );
}

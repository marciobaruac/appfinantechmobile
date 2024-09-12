import React, { useState } from 'react';

import { ButtonEdit, ButtonDelete } from '../../molecules';
import { Container } from '../../atoms';
import { } from './styles';

export const CardOptions = ({ cartaoId, onRefresh }) => {

    return (
        <Container height="auto" marginTop='15' flexDir='row'>
            <ButtonEdit cartaoId={cartaoId} />
            <ButtonDelete cartaoId={cartaoId} onRefresh={onRefresh} />
        </Container>
    );
};
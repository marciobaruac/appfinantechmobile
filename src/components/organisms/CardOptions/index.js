import React, { useState } from 'react';

import { ButtonEdit, ButtonDelete } from '../../molecules';
import { Container } from '../../atoms';
import { } from './styles';

export const CardOptions = ({ objetoId, onRefresh, ...props }) => {



    return (
        <Container height="auto" marginTop='15' flexDir='row'>
            <ButtonEdit objetoId={objetoId} screen={props.screen} />
            <ButtonDelete objetoId={objetoId} onRefresh={onRefresh} />
        </Container>
    );
};
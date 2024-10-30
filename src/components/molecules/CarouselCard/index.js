import React from 'react';
import { Container, Text } from '../../atoms';
import { Shadow } from './style';
import { ButtonPlusSquare } from '../ButtonPlusSquare';
import { TouchableOpacity } from 'react-native';

export const CarouselCard = ({ ...props }) => {
    const formatCurrency = (text) => {
        let cleaned = ('' + text).replace(/\D/g, '');
        let formatted = (cleaned / 100).toFixed(2)
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return formatted;
    };

    return (
        <Container height='147' width='327' align='center' radius='15' style={Shadow.card} >
            <TouchableOpacity activeOpacity={1} >
                <Container flexDir='row' align='center' height='30' width='295' justify='space-between' marginTop='10' >
                    <Text color='black' fontFamily='RobotoBlack' size='18'>{props.nome}</Text>
                    <ButtonPlusSquare objetoId={props.objetoId} />
                </Container>
                <Container width='295' justify='center' height='30' marginTop='5'>
                    <Text color='black' fontFamily='RobotoBold' size='17'>Fatura aberta</Text>
                </Container>
                <Container flexDir='row' width='295' justify='space-between' height='30' marginTop='5'>
                    <Text color='black' size='17'>Valor parcial</Text>
                    <Text fontFamily='RobotoBold' color='black' size='17'>R$ <Text fontFamily='RobotoBold' color='black' size='17'>{formatCurrency(props.valorParcial.toFixed(2))}</Text></Text>
                </Container>
                <Container flexDir='row' width='295' justify='space-between' height='30'>
                    <Text color='black' size='17'>Fecha em</Text>
                    <Text fontFamily='RobotoBold' color='black' size='17'>X setembro de XXXX</Text>
                </Container>
            </TouchableOpacity>
        </Container>
    );
}
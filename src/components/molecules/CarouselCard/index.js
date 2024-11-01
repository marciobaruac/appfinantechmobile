import React, { useState, useEffect } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { Container, Text } from '../../atoms';
import { Shadow, MarqueeText } from './style';
import { ButtonPlusSquare } from '../ButtonPlusSquare';

export const CarouselCard = ({ ...props }) => {

    const [isEffect, setIsEffect] = useState(false);


    /* Controle de animação */
    const handlePress = () => {
        setIsEffect(prevState => !prevState);
    };


    /* Formatação */
    const formatCurrency = (text) => {
        let cleaned = ('' + text).replace(/\D/g, '');
        let formatted = (cleaned / 100).toFixed(2)
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return formatted;
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength - 2) + ' ...' : text;
    };





    return (
        <Container height='147' width='327' align='center' radius='15' style={Shadow.card} >
            <TouchableOpacity activeOpacity={1} >
                <Container flexDir='row' align='center' height='30' width='295' justify='space-between' marginTop='10' >

                    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                        {props.nome.length < 11 ? (
                            <Text fontFamily="RobotoBlack" color="black" lineHeight="50" size="18"> {props.nome} </Text>
                        ) : (
                            isEffect ? (
                                <MarqueeText marginLeft='7' width='150' marqueeOnStart={true} spacing={200} speed={0.7}>
                                    <Text fontFamily="RobotoBlack" color="black" lineHeight="50" size="18"> {props.nome} </Text>
                                </MarqueeText>
                            ) : (
                                <Text fontFamily="RobotoBlack" color="black" lineHeight="50" size="18">
                                    {truncateText(props.nome, 11)}
                                </Text>
                            )
                        )}
                    </TouchableOpacity>

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
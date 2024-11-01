import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { ListFlags, ButtonOption } from '../../molecules';
import { Container, ListImages, Text } from '../../atoms';
import { CardBox, MarqueeText, Shadow } from './styles';
import { CardOptions } from '../CardOptions';

export const CardSection = ({ objetoId, ...props }) => {
    const [isEffect, setIsEffect] = useState(false);
    const [isEffectDesc, setIsEffectDesc] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const moveEffect = useSharedValue(0);


    /* Efeito carregamento de página */

    useEffect(() => {
        if (props.onReset) {
            moveEffect.value = withTiming(0);


            setTimeout(() => {
                setShowOptions(false);
            }, 10);
        }
    }, [props.onReset]);

    /* Lógica geral */

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength - 3) + ' ...' : text;
    };

    function getImagemNome() {
        return (props.categoria.categoria_imagem) &&
            props.categoria.categoria_imagem.nome

    }

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        const shortYear = year.substring(2);
        return `${day}/${month}/${shortYear}`;
    };



    /* Controle de animações */

    const handlePress = () => {
        setIsEffect(prevState => !prevState);
    };

    const handlePressDesc = () => {
        setIsEffectDesc(prevState => !prevState);
    };

    const handleOptionPress = () => {
        moveEffect.value = withTiming(-100); // Anima a movimentação para a esquerda

        setTimeout(() => {
            setShowOptions(true); // Exibe o CardOptions após o atraso de 1 segundo
        }, 150);

    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            marginLeft: moveEffect.value, // Anima a margem com o valor do shared value
        };
    });




    return (
        <Container height="auto" marginTop="20" flexDir='row' justify='center' >
            <Container width='300'>

                <Animated.View
                    style={[animatedStyle]}
                >
                    {props.screen === 'Cartoes' ?
                        (
                            <CardBox
                                width="300"
                                height="75"
                                align="center"
                                style={Shadow.card}
                            >
                                <Container flexDir="row" align="center" width="240" radius="15" marginLeft="20">
                                    {/* <ListFlags /> */}

                                    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                                        {props.nome.length < 16 ? (
                                            <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20"> {props.nome} </Text>
                                        ) : (
                                            isEffect ? (
                                                <MarqueeText width='190' marqueeOnStart={true} spacing={200} speed={0.7}>
                                                    <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20"> {props.nome} </Text>
                                                </MarqueeText>
                                            ) : (
                                                <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20">
                                                    {truncateText(props.nome, 16)}
                                                </Text>
                                            )
                                        )}
                                    </TouchableOpacity>
                                </Container>

                                <Container flexDir="row" align="center" radius="12" height="70" width="30">

                                    <ButtonOption onPress={handleOptionPress} />
                                </Container>
                            </CardBox>

                        ) : null
                    }

                    {props.screen === 'Despesas' ? (
                        <CardBox
                            width="298"
                            height="90"
                            align="center"
                            style={Shadow.card}
                        >
                            <Container flexDir="row" align="center" width="240" radius="15" marginLeft="10">
                                <ListImages type={getImagemNome()}
                                    width='35'
                                    height='35'
                                />

                                <Container justify='center'>
                                    {props.nome.length < 10 && props.nome && props.categoria.nome && props.categoria.nome.length < 10 ? (
                                        <Container flexDir='row' width='140'>
                                            <Container justify='center'>
                                                <Text fontFamily="RobotoBold" color="black" lineHeight="50" size="20"> {props.categoria.nome} </Text>

                                                <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="15" marginLeft='6'>
                                                    {props.nome}
                                                </Text>

                                                <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="15" marginLeft='6'>{formatDate(props.emissao)}</Text>
                                            </Container>

                                            <Container justify='center' width='100'>
                                                <Text fontFamily="RobotoBold" color="black" lineHeight="50" size="18">{props.valor}</Text>
                                            </Container >

                                        </Container>


                                    ) : (
                                        <Container flexDir='row' width='140'>
                                            <Container justify='center'>
                                                <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                                                    {isEffect ? (
                                                        <MarqueeText marginLeft='10' width='190' marqueeOnStart={true} spacing={200} speed={0.7}>
                                                            <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20"> {props.categoria.nome} </Text>
                                                        </MarqueeText>
                                                    ) : (
                                                        <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20" marginLeft='4'>
                                                            {truncateText(props.categoria.nome || " ", 10)}
                                                        </Text>
                                                    )}
                                                </TouchableOpacity>


                                                <TouchableOpacity activeOpacity={0.8} onPress={handlePressDesc}>
                                                    {isEffectDesc ? (
                                                        <MarqueeText marginLeft='10' width='140' marqueeOnStart={true} spacing={200} speed={0.7}>
                                                            <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="15" marginLeft='6'>
                                                                {props.nome}
                                                            </Text>
                                                        </MarqueeText>
                                                    ) : (
                                                        <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="15" marginLeft='6'>
                                                            {truncateText(props.nome || " ", 13)}
                                                        </Text>
                                                    )}
                                                </TouchableOpacity>
                                                <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="15" marginLeft='6'>{formatDate(props.emissao)}</Text>

                                            </Container>

                                            <Container justify='center' width='100'>
                                                <Text fontFamily="RobotoBold" color="black" lineHeight="50" size="18">{props.valor}</Text>
                                            </Container >
                                        </Container>
                                    )}
                                </Container>
                            </Container>

                            <Container flexDir="row" align="center" radius="12" height="70" marginLeft='10' width="30">
                                <ButtonOption onPress={handleOptionPress} />
                            </Container>
                        </CardBox>
                    ) : null}
                </Animated.View>
            </Container>

            {showOptions && (
                <Container width='70' position='absolute' left='255'>
                    <CardOptions objetoId={objetoId} onRefresh={props.onRefresh} screen={props.screen} />
                </Container>
            )}
        </Container>
    );
};

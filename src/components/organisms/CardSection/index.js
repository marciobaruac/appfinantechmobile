import React, { useState, useEffect } from 'react';
import DropShadow from "react-native-drop-shadow";
import { TouchableOpacity } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { ListFlags, ButtonOption } from '../../molecules';
import { Container, Text } from '../../atoms';
import { CardBox, MarqueeText } from './styles';
import { CardOptions } from '../CardOptions';

export const CardSection = ({ cartaoId, nome, onReset, onRefresh }) => {
    const [isEffect, setIsEffect] = useState(false);
    const [showOptions, setShowOptions] = useState(false); // Estado para controlar a visibilidade do CardOptions
    const moveEffect = useSharedValue(0); // Shared value para controlar o movimento

    useEffect(() => {
        if (onReset) {
            moveEffect.value = withTiming(0); // Reseta o CardBox para a posição original

            setTimeout(() => {
                setShowOptions(false); // Oculta o CardOptions quando resetar
            }, 10);
        }
    }, [onReset]);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;
    };

    const handlePress = () => {
        setIsEffect(prevState => !prevState);
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
            <Container width='300' >
                <DropShadow
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 2,
                            height: 5,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                    }}
                >
                    {/* Substituindo por Animated.View para suportar animação */}
                    <Animated.View
                        style={[animatedStyle]}
                    >
                        <CardBox
                            width="300"
                            height="70"
                            align="center"
                        >
                            <Container flexDir="row" align="center" width="255" radius="15" marginLeft="10">
                                <ListFlags />

                                <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                                    {nome.length < 16 ? (
                                        <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20"> {nome} </Text>
                                    ) : (
                                        isEffect ? (
                                            <MarqueeText marqueeOnStart={true} spacing={200} speed={0.7}>
                                                <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20"> {nome} </Text>
                                            </MarqueeText>
                                        ) : (
                                            <Text fontFamily="RobotoMedium" color="black" lineHeight="50" size="20">
                                                {truncateText(nome, 16)}
                                            </Text>
                                        )
                                    )}
                                </TouchableOpacity>
                            </Container>

                            <Container flexDir="row" align="center" radius="12" height="40" width="30">
                                {/* Passando o evento para o ButtonEdit */}
                                <ButtonOption onPress={handleOptionPress} />
                            </Container>
                        </CardBox>
                    </Animated.View>
                </DropShadow>
            </Container>

            {showOptions && (
                <Container width='70' position='absolute' left='255'>
                    <CardOptions cartaoId={cartaoId} onRefresh={onRefresh} />
                </Container>
            )}
        </Container>
    );
};

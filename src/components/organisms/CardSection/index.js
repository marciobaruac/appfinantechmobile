import React, { useState } from 'react'
import DropShadow from "react-native-drop-shadow";
import { TouchableOpacity } from 'react-native';

import { ListFlags, ButtonEdit } from '../../molecules'
import { Container, Text } from '../../atoms'
import { CardBox, MarqueeText } from './styles'


export const CardSection = ({ nome }) => {

    const [isEffect, setIsEffect] = useState(false)

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text
    }

    const handlePress = () => {
        setIsEffect(prevState => !prevState)
    }

    return (
        <Container height="auto" align="center" marginTop="20">
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

                <CardBox width="300" height="70" align='center' >
                    <Container flexDir='row' align='center' width='255' radius='15' marginLeft='10'>
                        <ListFlags />

                        <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                            {nome.length < 16 ? (
                                <Text fontFamily="RobotoBold" color="black" lineHeight="50" size="20"> {nome} </Text>
                            ) : (
                                isEffect ? (
                                    <MarqueeText marqueeOnStart={true} spacing={200} speed={0.7}>
                                        <Text fontFamily="RobotoBold" color="black" lineHeight="50" size="20"> {nome} </Text>
                                    </MarqueeText>
                                ) : (
                                    <Text fontFamily="RobotoBold" color="black" lineHeight="50" size="20">
                                        {truncateText(nome, 16)}
                                    </Text>
                                )
                            )}
                        </TouchableOpacity>
                    </Container>

                    <Container flexDir='row' align='center' radius='12' height='40' width='30'>
                        <ButtonEdit />
                    </Container>

                </CardBox>

            </DropShadow>
        </Container>
    )
}

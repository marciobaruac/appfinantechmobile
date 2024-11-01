import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';

import { Container, Logo, Text, IconCreditCard, IconExit, IconOutlay } from '../../atoms';
import { ButtonLogo, ButtonNotification } from '../../molecules';

export const HeaderDashboard = ({ pressed, open, setOpen, navigation }) => {
    const [items, setItems] = useState([
        {
            icon: () => <IconCreditCard size='31' />,
            label: 'Cartões de Crédito',
            value: 'credit'
        },
        {
            icon: () => <IconExit size='31' />,
            label: 'Sair',
            value: 'exit'
        },
    ]);

    useEffect(() => {
        if (pressed) {
            setOpen(false); // Fecha o dropdown ao clicar fora
        }
    }, [pressed]);

    const handleSelectItem = (item) => {
        if (item.value === 'credit') {
            navigation.navigate('Cartoes');
        } else if (item.value === 'exit') {
            handleLogout();
            navigation.navigate('Login');
        }
    };

    return (
        <View style={{ zIndex: 10 }}>
            <Container
                flexDir='row'
                bgColor='#0F1B28'
                height='50'
                justify='space-between'
                width='325'
                marginTop='10'
            >
                <Container width='237' bgColor='#0F1B28' >
                    {open ? (
                        <DropDownPicker
                            open={open}
                            setOpen={setOpen} // Usa setOpen passado como prop
                            items={items}
                            setItems={setItems}
                            showArrowIcon={false}

                            placeholder={
                                <>
                                    <Logo bgColor='#0F1B28' width='80' />
                                    <Text size='18' family='RobotoBold'>Menu</Text>
                                </>
                            }

                            onClose={() => setOpen(false)}

                            containerStyle={{ position: 'absolute', left: 0 }}

                            style={{
                                width: 270,
                                backgroundColor: '#0F1B28',
                                borderWidth: 1,
                                borderColor: 'rgba(0, 51, 102, 0.2)',
                                zIndex: 2,
                                shadowColor: '#00000',
                                shadowOffset: { width: 2, height: -4 },
                                shadowOpacity: 0.25,
                                shadowRadius: 5,
                                borderRadius: 10,
                                elevation: 5,
                            }}

                            dropDownContainerStyle={{
                                width: 270,
                                height: 120,
                                backgroundColor: '#0F1B28',
                                borderWidth: 0,
                                borderColor: 'transparent',
                                zIndex: 1,
                            }}

                            textStyle={{ fontSize: 18, color: 'white' }}
                            listItemContainerStyle={{ marginTop: 10 }}

                            onSelectItem={handleSelectItem}
                        />
                    ) : (
                        <ButtonLogo size='25' bgColor='#0F1B28' onPress={() => setOpen(true)} />
                    )}
                </Container>

                <Container width='43' bgColor='#0F1B28'>
                    <ButtonNotification />
                </Container>
            </Container>
        </View>
    );
};

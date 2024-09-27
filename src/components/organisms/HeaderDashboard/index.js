import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTheme } from 'styled-components/native';
import { Platform, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Logo, Text, IconCreditCard, IconExit } from '../../atoms';
import { ButtonLogo, ButtonNotification } from '../../molecules';
import API from '../../../helpers/api';

export const HeaderDashboard = ({ pressed, navigation }) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {
            icon: () => <IconCreditCard size='31' />,
            label: 'Cartões de Crédito',
            value: '1'
        },
        {
            icon: () => <IconExit size='31' />,
            label: 'Sair',
            value: '2'
        },
    ]);

    const theme = useTheme();

    useEffect(() => {
        if (pressed) {
            setOpen(false);
        }
    }, [pressed]);

    const handleLogout = async () => {
        try {
            const response = await API.post('api/users/logout');

            if (response.status === 200) {

                await AsyncStorage.removeItem('token');

            }
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao realizar logout!');
        }
    }

    const handleSelectItem = (item) => {
        if (item.value === '1') {
            navigation.navigate('Cartoes');
        }

        if (item.value === '2') {

            handleLogout()
            navigation.navigate('Login')
        }
    };


    return (
        <View style={{ zIndex: 10 }}>
            <Container
                flexDir='row'
                bgColor='#0F1B28'
                height={Platform.OS === 'ios' ? 85 : 80}
                align='center'
                justify='space-between'
                width='325'
                marginTop={Platform.OS === 'ios' ? 15 : 12}
            >
                {open ? (
                    <DropDownPicker
                        open={open}
                        items={items}
                        setOpen={setOpen}
                        setItems={setItems}
                        showArrowIcon={false}

                        placeholder={
                            <>
                                <Logo bgColor='#0F1B28' width='80' />
                                <Text size='18' family='RobotoBold'>Menu</Text>
                            </>
                        }

                        onClose={() => setOpen(false)}

                        containerStyle={{ position: 'absolute', top: 22, left: 0 }}

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
                            height: 110,
                            backgroundColor: '#0F1B28',
                            borderWidth: 0,
                            borderColor: 'transparent',
                            zIndex: 1,
                        }}

                        textStyle={{ fontSize: 18, fontFamily: theme.fonts['RobotoBold'], color: 'white' }}
                        listItemContainerStyle={{ marginTop: 10 }}

                        onSelectItem={handleSelectItem} // Função para navegar ao selecionar o item
                    />
                ) : (
                    <ButtonLogo size='25' bgColor='#0F1B28' align='center' justify='center' onPress={() => setOpen(true)} />
                )}

                <Text size='18' marginTop='10' fontFamily='RobotoBold' style={{ zIndex: 1 }}>
                    Janeiro
                </Text>

                <ButtonNotification />
            </Container>
        </View>
    );
};

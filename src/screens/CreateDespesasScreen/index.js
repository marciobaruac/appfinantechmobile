import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone'

import API from '../../helpers/api';
import { Container, Text, ButtonBack, Logo, InputList, ListImages } from '../../components';
import { Input, ButtonAdd, styles } from './styles';
import { useRoute } from '@react-navigation/native';

export const CreateDespesasScreen = ({ route, navigation }) => {
    const cartaoId = route.params?.cartaoId
    const { despesaId } = route.params || {};

    const [isEditing, setIsEditing] = useState(false);

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);


    const [valor, setValor] = useState('0,00');
    const [dateRegister, setDateRegister] = useState('');
    const [dateEmissao, setDateEmissao] = useState(date.toISOString().slice(0, 10));
    const [descricao, setDescricao] = useState('');
    const [categorias, setCategorias] = useState([])
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');



    let data = {
        "categoria_id": 1,
        "referencia": descricao,
        "valor_integral": valor.replace(',', '.'),
        "valor_pago": 0.00,
        "date_register": dateRegister,
        "data_vencimento": "2024-11-01",
        "fornecedor_id": 1,
        "data_emissao": dateEmissao,
        "data_pagamento": dateEmissao, // temporariamente terá dateEmissão como valor
        "forma_pagamento": 1,
        "dreconta_id": categoriaSelecionada,
        "contabilId": 1,
        "empresa_id": 1,
        "cartao_id": cartaoId
    }

    useEffect(() => {
        if (despesaId) {

            setIsEditing(true);
            fetchCartaoData(despesaId);
        }
    }, [despesaId]);

    const fetchCategoria = async () => {
        try {
            const response = await API.get('/api/categoriaDespesas');
            if (Array.isArray(response.data.response)) {

                setCategorias(response.data.response);


            } else {
                setCategorias([]);
            }
        } catch (error) {
            console.error('Erro ao retornar a lista de categorias:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        fetchCategoria()

    }, [])

    useState(() => {
        const localDate = moment.utc(date).tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm:ss');

        setDateRegister(localDate)
    })

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);

        // Formatar a data como 'YYYY-MM-DD'
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        setDateEmissao(formattedDate);
    };

    /* Formatar o valor da despesa */
    const formatCurrency = (text) => {
        let cleaned = ('' + text).replace(/\D/g, '');
        let formatted = (cleaned / 100).toFixed(2)
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return formatted;
    };



    const handleValorChange = (text) => {

        setValor(formatCurrency(text));
    };


    const handleCreateOrEdit = async () => {
        if (valor.trim() === '' && valor.trim() === '0,00') {
            Alert.alert('Erro', 'O campo valor não pode ser 0,00.');
            return;
        }

        if (descricao.trim() === '') {
            Alert.alert('Erro', 'O campo Descrição não pode estar vazio.');
            return;
        }


        if (categoriaSelecionada == null || isNaN(categoriaSelecionada)) {
            Alert.alert('Erro', 'O campo Categorias não pode estar vazio.');
            return;
        }

        const axiosPut = async () => {
            try {

                await API.put(`/api/despesas/update/${despesaId}`, { nome: cartao });

                return Alert.alert('Sucesso', 'Dados da despesa alterados com sucesso')

            } catch (error) {

                return Alert.alert('Erro', 'Nome do cartão já existe')
            }
        }

        try {
            if (isEditing) {

                axiosPut()

                navigation.navigate('Despesas', { shouldRefresh: true });

            }

            if (!isEditing) {
                await API.post(`/api/despesas/create`, data);
                Alert.alert('Sucesso', 'Despesa criada com sucesso.');

                navigation.navigate('Despesas', { shouldRefresh: true });
            }




        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.error('Erro na requisição:', error);

                Alert.alert('Erro', 'Não foi possível realizar a criação da Despesa.');
            }


        }

    };


    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };


    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <Container >
                <Container flexDir='row' bgColor='#0F1B28' height='70' padLeft='10'>
                    <View style={{ marginTop: 7 }}>
                        <ButtonBack onPress={() => navigation.navigate('Despesas')} />
                    </View>
                    <Text marginLeft='25' size='32' fontFamily='RobotoBold'>
                        {isEditing ? 'Editar Despesa' : 'Nova Despesa'}
                    </Text>
                </Container>

                <Container align='center' height='390'>

                    <Container width='305' height='60' justify='center' radius='15' marginTop='35' >
                        <Container flexDir='row' height='47'>
                            <Text color='#FF9C00' fontFamily='RobotoBlack' size='35'>R$</Text>

                            <Input
                                placeholder={valor}
                                placeholderTextColor="#FF9C00"
                                color='#FF9C00'
                                size='35'
                                fontFamily='RobotoBlack'
                                maxLength={13}
                                cursorColor="white"
                                value={valor}
                                onChangeText={handleValorChange}
                            />
                        </Container>

                        <Text fontFamily='RobotoBold' size='17' marginLeft='6' color='black'>Valor da Despesa</Text>

                    </Container>

                    <Container width='305' height='60' justify='center' radius='15' marginTop='35' style={styles.shadow}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setShowDatePicker(true)}>
                            <ListImages type='DATE' width='28' height='28' marginLeft='14' />

                            <Input
                                placeholder="Selecionar Data"
                                placeholderTextColor="black"
                                editable={false}
                                marginLeft='10'
                                padRight='15'
                                value={date.toLocaleDateString('pt-BR')}
                            />

                        </TouchableOpacity>

                    </Container>

                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}



                    <Container flexDir='row' width='305' height='60' align='center' radius='15' marginTop='35' style={styles.shadow}>
                        <ListImages type='DESCRICAO' width='28' height='28' marginLeft='14' />

                        <Input
                            placeholder="Descrição"
                            placeholderTextColor="black"
                            maxLength={255}
                            padLeft='15'
                            padRight='15'
                            value={descricao}
                            onChangeText={setDescricao}
                        />

                    </Container>

                    <Container width='305' height='60' justify='center' radius='15' marginTop='50'>
                        <InputList

                            categorias={
                                categorias.map((categoria) => (
                                    categoria
                                ))
                            }

                            onChange={(value) => setCategoriaSelecionada(value)}

                        />

                    </Container>

                </Container>

                <Container height='60' align='center' justify='center' marginTop='50'>
                    <ButtonAdd onPress={handleCreateOrEdit} >
                        <Text fontFamily='RobotoBold' size='18'>
                            {isEditing ? 'Salvar Alterações' : 'Salvar'}
                        </Text>
                    </ButtonAdd>
                </Container>

                <Container height='35' justify='center' align='center' marginTop='140'>
                    <Logo width='20' />
                </Container>
            </Container>
        </TouchableWithoutFeedback>
    );
};

import React, { useState, useEffect } from 'react';
import { DropdownInput } from './styles';
import { Container, ListImages, Text } from '../../atoms';

export const InputList = ({ ...props }) => {
    const [categoriaId, setCategoriaId] = useState('');
    const [categoriasList, setCategoriasList] = useState([]);
    const [visibleItems, setVisibleItems] = useState(10);

    useEffect(() => {
        const novosItens = props.categorias.map((categoria) => ({
            label: categoria.nome,
            value: categoria.id,
            icon: categoria.categoria_imagem ? categoria.categoria_imagem.nome : ''
        }));

        setCategoriasList(novosItens);
    }, [props.categorias]);

    const handleLoadMore = () => {
        setVisibleItems((prev) => prev + 10);
    };

    const displayedItems = categoriasList.slice(0, visibleItems); // Mostra apenas os itens visíveis


    return (
        <>
            <DropdownInput
                data={displayedItems}
                labelField="label"
                valueField="value"
                value={categoriaId}
                placeholder="Categorias"
                onChange={(item) => {
                    setCategoriaId(item.value);
                    props.onChange(item.value)
                }}
                renderLeftIcon={() => (
                    <ListImages type='CATEGORIA' width='25' height='25' marginLeft='15' marginRight='10' />
                )}
                renderItem={(item) => (
                    <Container height='30' flexDir='row' marginLeft='13' marginTop='10'>
                        <ListImages type={item.icon} />
                        <Text color='black'>{item.label}</Text>

                    </Container>
                )}
                renderRightIcon={() => null}
                maxHeight={200}
                height='60'
                width='306'
                onEndReached={handleLoadMore} // Chama ao chegar no final da lista
            />
            <Container height='20' width='200' marginTop='10'>
                {visibleItems < categoriasList.length && (
                    <Text onPress={handleLoadMore} color='blue' align='center' marginLeft='10' >
                        Carregar mais categorias
                    </Text>
                )}
            </Container>

        </>
    );
};

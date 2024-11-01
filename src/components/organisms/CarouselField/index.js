import React from 'react';
import { Container } from '../../atoms';
import { CarouselCard } from '../../molecules';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const CarouselField = ({ cartoes, despesas }) => {
    const width = Dimensions.get('window').width

    const carouselItems = cartoes.map(cartao => {
        const despesasDoCartao = despesas.filter(despesa => despesa.cartao_id === cartao.id);
        const totalValor = despesasDoCartao.reduce((total, despesa) => total + parseFloat(despesa.valor_integral), 0);

        return {
            id: cartao.id,
            nome: cartao.nome,
            despesas: despesasDoCartao,
            valorParcial: totalValor,
        };
    });

    return (
        <Container >
            <Carousel
                mode='parallax'
                loop={false}
                width={width}
                height={width / 2}
                data={carouselItems}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <Container >
                        <CarouselCard
                            despesas={item.despesas}
                            objetoId={item.id}
                            nome={item.nome}
                            valorParcial={item.valorParcial}
                        />
                    </Container>
                )}
            />
        </Container>
    );
};

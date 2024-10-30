import React from 'react';
import { Container } from '../../atoms';
import { CarouselCard } from '../../molecules';
import { ScrollView } from 'react-native';

export const CarouselField = ({ ...props }) => {

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16} decelerationRate="fast" snapToInterval={380}>
            <Container justify='center' marginTop='20' height='147' flexDir='row' marginLeft='4' marginRight='15' >

                {props.cartoes.map((cartao) => {
                    const despesasDoCartao = props.despesas.filter(despesa => despesa.cartao_id === cartao.id);

                    const totalValor = despesasDoCartao.reduce((total, despesa) => {
                        return total + parseFloat(despesa.valor_integral);
                    }, 0);

                    return (
                        <React.Fragment key={cartao.id}>
                            <CarouselCard
                                despesas={despesasDoCartao}
                                objetoId={cartao.id}
                                nome={cartao.nome}
                                valorParcial={totalValor}
                            />
                            <Container width='10' bgColor='#F8F8F8' key={`spacer-${cartao.id}`} />
                        </React.Fragment>
                    );
                })}

            </Container>
        </ScrollView>
    );
}

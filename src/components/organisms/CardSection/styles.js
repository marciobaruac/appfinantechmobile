import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Marquee } from "@animatereactnative/marquee";

export const CardBox = styled.View`
    border-width: 1px;
    border-color: #E3E3E3;
    border-radius: 18px;
    flex-direction: row;

    width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '100%')};
    height: ${({ theme, height }) => (height ? `${theme.metrics.px(height)}px` : '100%')};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bgColor }) => bgColor || 'white'};
`;

export const MarqueeText = styled(Marquee)`
    width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '20px')};
    margin-left: ${({ marginLeft, theme }) => theme.metrics.px(marginLeft || 0)}px;
`;

export const Shadow = StyleSheet.create(
    {
        card: {
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            borderRadius: 10,
            elevation: 6
        }
    }
)
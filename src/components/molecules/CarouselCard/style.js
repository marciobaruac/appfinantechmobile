import { StyleSheet } from "react-native";
import { Marquee } from "@animatereactnative/marquee";
import styled from "styled-components";

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
            elevation: 6
        }
    }
)

export const MarqueeText = styled(Marquee)`
    width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '20px')};
    margin-left: ${({ marginLeft, theme }) => theme.metrics.px(marginLeft || 0)}px;
`;
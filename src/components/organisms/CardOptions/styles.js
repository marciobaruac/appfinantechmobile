import styled from "styled-components/native";
import { Marquee } from "@animatereactnative/marquee";

export const CardBox = styled.View`
    border: solid 1px;
    border-color: #E3E3E3;
    border-radius: 18px;
    flex-direction: row;

    width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '100%')};
    height: ${({ theme, height }) => (height ? `${theme.metrics.px(height)}px` : '100%')};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bgColor }) => bgColor || 'white'};
`

export const MarqueeText = styled(Marquee)`
    
    width: 220px;
`
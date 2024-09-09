import styled from "styled-components/native";

export const CustomText = styled.Text`
    font-size: ${({ theme, size }) => theme.metrics.px(size || 14)}px;
    color: ${({ color }) => color || 'white'};
    color: ${({ color }) => color || 'white'};
    font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'RobotoRegular']};
    text-align: ${({ align }) => align || 'start'};
    line-height: ${({ lineHeight }) => lineHeight || 0}px;
`
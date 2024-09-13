import styled from "styled-components/native";

export const CustomText = styled.Text`

    font-size: ${({ theme, size }) => theme.metrics.px(size || 14)}px;
    color: ${({ color }) => color || 'white'};
    font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'RobotoRegular']};
    text-align: ${({ align }) => align || 'start'};
    margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
    margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
`
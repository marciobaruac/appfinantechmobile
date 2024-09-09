import styled from "styled-components/native";

export const CustomImages = styled.Image`
    width: ${({ theme, size }) => theme.metrics.px(size || 20)}px;
    height: ${({ theme, size }) => theme.metrics.px(size || 20)}px;
`
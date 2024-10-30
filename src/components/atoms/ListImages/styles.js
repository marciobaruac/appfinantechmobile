import styled from "styled-components/native";

export const CustomImages = styled.Image`
    width: ${({ theme, width }) => theme.metrics.px(width || 20)}px;
    height: ${({ theme, height }) => theme.metrics.px(height || 20)}px;
    border-radius: ${({ theme, radius }) => theme.metrics.px(radius || 0)}px;
    margin-left: ${({ marginLeft, theme }) => theme.metrics.px(marginLeft || 0)}px;
    margin-right: ${({ marginRight, theme }) => theme.metrics.px(marginRight || 0)}px;
`
import styled from "styled-components/native";

export const Container = styled.View`
    
    /* Dinamics Styles */
    display: ${({ display }) => display || 'flex'};
    position: ${({ position }) => position || 'fixed'};
    left: ${({ left, theme }) => theme.metrics.px(left || 0)}px;
    padding-top: ${({ padTop, theme }) => theme.metrics.px(padTop || 0)}px;
    padding-bottom: ${({ padBottom, theme }) => theme.metrics.px(padBottom || 0)}px;
    padding-left: ${({ padLeft, theme }) => theme.metrics.px(padLeft || 0)}px;
    margin-top: ${({ marginTop, theme }) => theme.metrics.px(marginTop || 0)}px;
    margin-left: ${({ marginLeft, theme }) => theme.metrics.px(marginLeft || 0)}px;
    flex-direction: ${({ flexDir }) => flexDir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bgColor }) => bgColor || 'white'};
    width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '100%')};
    height: ${({ theme, height }) => (height ? `${theme.metrics.px(height)}px` : '100%')};
    border-radius: ${({ radius, theme }) => radius ? `${theme.metrics.px(radius)}px` : '0px'};
    


`

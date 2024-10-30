import styled from 'styled-components/native';
import { Dropdown } from 'react-native-element-dropdown';

export const DropdownInput = styled(Dropdown)`
    /* Default styles */
    border-color: #E3E3E3;
    shadow-color: #000;
    shadow-offset: 2px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 5px;
    border-radius: 10px;
    elevation: 6;
    border-width: 1px;
    border-radius: 15px;

    /* Dynamic styles */
    height: ${({ theme, height }) => (height ? `${theme.metrics.px(height)}px` : '50px')};
    width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '60px')};
    background-color: ${({ bgColor }) => bgColor || 'white'};
    align-items: ${({ align }) => align || 'flex-start'};
    margin-right: ${({ marginRight, theme }) => theme.metrics.px(marginRight || 0)}px;
    margin-top: ${({ marginTop, theme }) => theme.metrics.px(marginTop || 0)}px;
    margin-left: ${({ marginLeft, theme }) => theme.metrics.px(marginLeft || 0)}px;
`

import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 307,
        marginLeft: 20,
    },
    shadow: {
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
})

export const Input = styled.TextInput`
    padding-left: ${({ padLeft, theme }) => theme.metrics.px(padLeft || 0)}px;
    padding-right: ${({ padRight, theme }) => theme.metrics.px(padRight || 0)}px;
    margin-right: ${({ marginRight, theme }) => theme.metrics.px(marginRight || 0)}px;
    margin-top: ${({ marginTop, theme }) => theme.metrics.px(marginTop || 0)}px;
    margin-left: ${({ marginLeft, theme }) => theme.metrics.px(marginLeft || 0)}px;
    width: 290px;
    height: 58px;
    color: ${({ color }) => color || 'black'};
    font-size: ${({ theme, size }) => theme.metrics.px(size || 15)}px;
    font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'RobotoRegular']}
`


export const ButtonAdd = styled.TouchableOpacity`
    width: 200px;
    height: 58px;
    background-color: #ff9c00;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    border-color: #e3e3e3;
    elevation: 5;
`
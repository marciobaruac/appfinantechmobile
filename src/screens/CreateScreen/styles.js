import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 307,
        marginLeft: 20,
    }
})

export const Input = styled.TextInput`
    padding-left: 15px;
    padding-right: 15px;
    width: 305px;
    height: 58px;
`

export const ButtonAdd = styled.TouchableOpacity`
    width: 200px;
    height: 58px;
    background-color: #ff9c00;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    margin-left: 75px;
    border-color: #e3e3e3;
`
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
    padding-left: 15px;
    padding-right: 15px;
    width: 307hpx;
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
    border-color: #e3e3e3;
`
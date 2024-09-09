import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        width: 60,
        borderColor: '#E3E3E3',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        marginRight: 5
    },
    item: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

    }
})
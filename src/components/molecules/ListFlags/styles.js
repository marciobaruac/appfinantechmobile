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
        marginRight: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 10,
        elevation: 6

    },
    item: {
        alignItems: 'center',
        paddingVertical: 10,
    }
})
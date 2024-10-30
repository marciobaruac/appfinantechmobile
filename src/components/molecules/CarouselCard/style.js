import { StyleSheet } from "react-native";

export const Shadow = StyleSheet.create(
    {
        card: {
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 6
        }
    }
)
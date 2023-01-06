import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    inactive: {
        opacity: 0.5
    },
    contentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
    user: {
        fontWeight: 'bold',
        marginBottom: 2
    },
    text: {
        opacity: 0.5
    },
    time: {
        marginTop: 5,
        fontSize: 12,
    }
});
import { StyleSheet } from "react-native";
import { useTheme } from '../../../../hooks';


export const styled = () => {

    const { theme } = useTheme();

    return StyleSheet.create({
        content: {
            alignItems: "center",
            marginBottom: 10
        },
        RBSheetContainer: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: theme.Default.background
        },
        commentList: {
            marginBottom: 80
        },
        noCommentText: {
            textAlign: "center",
            marginTop: 20,
            opacity: 0.6

        }

    })
}
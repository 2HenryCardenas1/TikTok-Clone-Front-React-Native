import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,

    },
    noVideos: {
        width: '100%',
        alignItems: 'center',
        opacity: 0.6,
        marginTop: 20
    },
    videoBlock: {
        marginTop: 10,
        width: "33.333%",
        height: 200,


    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'

    }
});
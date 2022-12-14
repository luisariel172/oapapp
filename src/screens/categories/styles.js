import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundOap,
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: colors.text,
    }
});
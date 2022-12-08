import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundOap,
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: COLORS.text,
    },
    containerList: {
        flex: 1,
    },
});
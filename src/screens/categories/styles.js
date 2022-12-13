import { StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';
import { isAndroid } from '../../utils';

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.backgroundOap,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
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
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';
export const styles =  StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    footer:{
        backgroundColor: COLORS.white,
        borderTopWidth: 2,
        borderTopColor: COLORS.ojo,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    buttonConfirm:{
        backgroundColor: COLORS.ojo,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButtonConfirm:{
        fontSize: 16,
        fontFamily:'Ubuntu-Regular',
    },
    totalContainer:{
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTotalTitle:{
        fontFamily:'Ubuntu-Regular',
        fontSize: 14,
    },
    textTotal:{
        fontSize: 16,
        fontFamily: 'Ubuntu-Bold',

    },
})
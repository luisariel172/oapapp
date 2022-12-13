import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

export  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        // backgroundColor: COLORS.backgroundDark,
        borderRadius: 10,
        height: 120,
    },
    item: {
        flex: 1,
        justifyContent: 'space-around',

    },
    name: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 18,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 17,

    },
    stock: {
        fontFamily: 'Ubuntu-Italic',
        fontSize: 16,
    },
});
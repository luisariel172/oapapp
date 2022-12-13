import { StyleSheet } from 'react-native'; 
import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 160,
        },
    contentContainer: {
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    
    },
    title: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: COLORS.text,
    },
});
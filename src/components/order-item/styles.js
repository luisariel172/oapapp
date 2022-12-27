import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create ({
    container:{
        flex: 1,
        padding: 10,
        borderBottomColor: COLORS.piojo,
        borderBottomWidth: 1,
        backgroundColor: COLORS.ojo,
        height: 85,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
    },
    headerContainer:{

    },
    date:{

    },
    contentContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content:{

    },
    total:{
        fontSize: 16,
        fontFamily: 'Ubuntu-Bold',
    },
}); 
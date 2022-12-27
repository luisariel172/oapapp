import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';

const CartItem = ({ item, onDelete}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.stock}>Stock: {item.stock}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons
                        name="trash"
                        size={24}
                        color= {COLORS.backgroundDark} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;


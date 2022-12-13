import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ProductItem = ({ item, onSelected, color }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color}}>
            <TouchableOpacity
                style={styles.item}
                onPress={() => onSelected(item)}
            >
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>$ {item.price} </Text>
                    <Text style={styles.stock}>Stock: {item.stock} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;

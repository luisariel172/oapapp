import React from 'react';
import { View, Text } from 'react-native';
import { PRODUCTS } from '../../constants/data/products';
import { styles } from './styles';

const Product = ({navigation, route}) => {
    const { productId } = route.params;

    const filteredProduct = PRODUCTS.find((product) => product.id === productId);
    const { name, price, description, stock } = filteredProduct || {};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>$ {price}</Text>
            <Text style={styles.stock}>Stock: {stock}</Text>

        </View>
    );
};

export default Product;
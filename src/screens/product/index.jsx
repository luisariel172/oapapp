import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

const Product = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Producto</Text>
        </View>
    );
};

export default Product;
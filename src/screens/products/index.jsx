import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/themes/colors";

import { styles } from "./styles";

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Productos</Text>
            <Button
                title="Ir a Producto"
                color={colors.primary}
                onPress={()=>navigation.navigate('Product')}
            />
        </View>
    );
};

export default Products;
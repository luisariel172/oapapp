import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/themes/colors";

import { styles } from "./styles";

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>
            <Button
                title="Ir a Productos"
                color={colors.primary}
                onPress={()=>navigation.navigate('Products')}
            />
        </View>
    );
};

export default Categories;
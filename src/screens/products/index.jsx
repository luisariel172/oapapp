import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from '../../components/product-item';
import {PRODUCTS} from '../../constants/data/index'
import { COLORS } from '../../constants/themes/colors';

import { styles } from './styles';

const Products = ({ navigation, route }) => {
    const { categoryId, color } = route.params;

    const filteredProducts = PRODUCTS.filter(product => product.categoryId === categoryId);
    const onSelected = (item) => {
        navigation.navigate('Product', {title: item.name, productId: item.id});
    }
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} color={color}/>;
    return (
        <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}

        />
        // <View style={styles.container}>
        //     <Text style={styles.title}>Productos</Text>
        //     <Button
        //         title="Ir a Producto"
        //         color={COLORS.primary}
        //         onPress={()=>navigation.navigate('Product')}
        //     />
        // </View>
    );
};

export default Products;
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import { CategoryItem } from '../../components';
import { CATEGORIES } from '../../constants/data/index';
import { COLORS } from '../../constants/themes/colors';
import { styles } from './styles';

const Categories  = ({ navigation }) => {
    const onSelected = (item) => {
        console.warn('onSelected', item);
    };
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    return ( 
        <FlatList 
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.containerList}
        />
    );
};

export default Categories;
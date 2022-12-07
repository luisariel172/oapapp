import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TurboModuleRegistry } from 'react-native';
import { colors } from '../constants/themes/colors';

import { Categories, Products, Product } from '../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle:{
                    backgroundColor: colors.background,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'Ubuntu-Bold',
                } ,
            }}
        >
            <Stack.Screen 
                name="Categories"
                component={Categories}
                options={{
                    headerShown: false,
                }}
                />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    );
};

export default ShopNavigator;
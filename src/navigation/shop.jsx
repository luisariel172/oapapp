import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Platform } from 'react-native';
import { COLORS } from '../constants/themes/colors';
import { Categories, Products, Product } from '../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'ios' ? COLORS.backgroundDark : COLORS.background,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: {
                    fontFamily: 'Ubuntu-Bold',
                } ,
                presentation: 'card', //solo para IOS
            }}
        >
            <Stack.Screen 
                name="Categories"
                component={Categories}
                options={{
                    headerShown: false,
                }}
                />
            <Stack.Screen name="Products" component={Products} 
                options={{title: 'Productos'}}
            />
            <Stack.Screen name="Product" component={Product}
                options={{title: 'Producto detallado'}}
            />
        </Stack.Navigator>
    );
};

export default ShopNavigator;
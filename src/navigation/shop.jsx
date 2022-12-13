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
                //para q en todos los backs que tenga, no salga ningun texto
                headerBackTitle: '',
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
                //route recibe automaticamente los parametros q le paso a traves de los parametros de navegacion
               //para q funcione de forma dinamica segun el elemento que seleccione
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen name="Product" component={Product}
                options={({route}) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    );
};

export default ShopNavigator;
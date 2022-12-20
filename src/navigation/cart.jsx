import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from '../screens';
import { COLORS } from '../constants/themes/colors';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
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
            }}>
                <Stack.Screen
                name="Cart"
                component={Cart}
                />
        </Stack.Navigator>
    )

}

export default CartNavigator;
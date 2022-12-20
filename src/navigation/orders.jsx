import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orders } from '../screens';
import { COLORS } from '../constants/themes/colors';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'ios' ? COLORS.backgroundDark : COLORS.background,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: {
                    fontFamily: 'Ubuntu-Bold',
                } ,
                presentation: 'card', //solo para IOS
                //para q en todos los backs   que tenga, no salga ningun texto
                headerBackTitle: '',
            }}>
                <Stack.Screen
                name="Orders"
                component={Orders}
                />
        </Stack.Navigator>
    )

}

export default OrderNavigator;
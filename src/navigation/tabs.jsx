import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons, MaterialCommunityIcons  }from '@expo/vector-icons'
import ShopNavigator from './shop';
import CartNavigator from './cart';
import OrderNavigator from './orders';
import { COLORS } from '../constants/themes/colors';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator initialRouteName="ShopTab"
            screenOptions={{
                hedaderShown: false,
            }}>
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} 
                options={{
                    title: 'Tienda',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name= { focused ? 'home-variant' : 'home-variant-outline' }
                            size={22}
                            color={COLORS.primary}
                            />
                    )
                }}
            />    
            <BottomTab.Screen name="CartTab" component={CartNavigator} 
                options={{
                    title: 'Carrito',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name= { focused ? 'cart' : 'cart-outline' }
                            size={22}
                            color={COLORS.primary}
                            />
                    )
                }}
            />   
            <BottomTab.Screen name="OrdersTabs" component={OrderNavigator} 
                options={{
                    title: 'Ordenes',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name= { focused ? 'inbox' : 'inbox-outline' }
                            size={22}
                            color={COLORS.primary}
                            />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
};

export default Tabs;
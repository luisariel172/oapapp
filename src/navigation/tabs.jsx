import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons, MaterialCommunityIcons  }from '@expo/vector-icons'
import ShopNavigator from './shop';
import CartNavigator from './cart';
import OrderNavigator from './orders';
import { COLORS } from '../constants/themes/colors';
import { isAndroid } from '../utils';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                hedaderShown: false,
                tabBarLabelStyle: {
                        fontFamily: 'Ubuntu-Regular',
                        fontSize: 13,
                    },
                    tabBarActiveTintColor: COLORS.text,
                    tabBarInactiveTintColor: COLORS.grey,
                    tabBarStyle: {
                        padding: isAndroid ? 10: 0,
                        height: isAndroid ? 60 :50,
                    }
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
                    ),
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
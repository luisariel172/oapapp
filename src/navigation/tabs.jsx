import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import React from 'react';

import ShopNavigator from './shop';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator initialRouteName="ShopTab"
            screenOptions={{
                hedaderShown: false,
            }}>
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} />
        </BottomTab.Navigator>
    );
};

export default Tabs;
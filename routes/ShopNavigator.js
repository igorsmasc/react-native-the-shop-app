import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
};

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={defaultStackNavOptions}
      initialRouteName="Overview"
    >
      <Stack.Screen
        name="Overview"
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetailScreen}
        options={{ title: 'Product Detail' }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: 'Cart' }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

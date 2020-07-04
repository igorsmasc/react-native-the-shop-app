import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';

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
const Drawer = createDrawerNavigator();
const isLoggedIn = false;

const ProductsNavigator = () => {
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
        options={{ title: 'Your Cart' }}
      />
    </Stack.Navigator>
  );
};

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Admin" component={UserProductsScreen} />
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
};

const ShopNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeTintColor: Colors.primary }}
    >
      <Drawer.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={drawerConfig.tintColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Your Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={drawerConfig.tintColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={drawerConfig.tintColor}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={ShopNavigator} />
        </>
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: 'Authenticate' }}
        />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;

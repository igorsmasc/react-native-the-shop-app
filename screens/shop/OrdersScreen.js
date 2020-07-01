import React, { useEffect } from 'react';
import { Text, StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const OrdersScreen = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <Text>{item.totalAmount}</Text>}
    />
  );
};

const styles = StyleSheet.create({});

export default OrdersScreen;

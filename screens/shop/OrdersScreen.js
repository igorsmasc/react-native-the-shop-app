import React, { useEffect } from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

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
      renderItem={({ item }) => (
        <OrderItem amount={item.totalAmount} date={item.readableDate} />
      )}
    />
  );
};

export default OrdersScreen;

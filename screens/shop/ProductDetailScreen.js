import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === id),
  );

  useEffect(() => {
    navigation.setOptions({
      title: selectedProduct.title,
    });
  }, [navigation, selectedProduct.title]);

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;

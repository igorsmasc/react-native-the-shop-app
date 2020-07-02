import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';

import * as productsActions from '../../store/actions/products';

const EditProductScreen = ({ navigation, route }) => {
  const productId = route.params ? route.params.productId : null;
  const dispatch = useDispatch();

  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === productId),
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : '',
  );
  const [price, setprice] = useState('');
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : '',
  );

  const submitHandler = useCallback(() => {
    if (productId) {
      dispatch(
        productsActions.updateProduct(productId, title, description, imageUrl),
      );
    } else {
      dispatch(
        productsActions.createProduct(
          title,
          description,
          imageUrl,
          parseFloat(price),
        ),
      );
    }
    navigation.goBack();
  }, [title, description, imageUrl, price, productId, dispatch, navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: productId ? 'Edit Product' : 'Add Product',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
            }
            onPress={submitHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, productId, submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setprice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;

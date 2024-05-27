// Products.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import products from '../data/products';

const Products = () => {
  return (
    <View style={styles.container}>
     <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    width: '100%',
  },
  list: {
    paddingHorizontal: 0,
    width: "100%",
  },
});

export default Products;

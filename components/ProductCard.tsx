// ProductCard.js
import { Product } from '@/data/products';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



type ProductCardProps = {
    product: Product;
  }

const ProductCard : React.FC<ProductCardProps> = ({product}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  name: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    marginBottom: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default ProductCard;

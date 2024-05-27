// ProductCard.js
import { Product } from '@/data/products';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';



type ProductCardProps = {
    product: Product;
  }

const ProductCard : React.FC<ProductCardProps> = ({product}) => {
  return (
    <View style={styles.card}>
      <Link href={`${product.id}`} asChild>
      <Pressable>
      <Image source={{uri: (product.image)}} style={styles.image}  />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </Pressable>
    </Link>
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
    width: '50%',
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

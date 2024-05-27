import {  StyleSheet, ActivityIndicator } from 'react-native';
import { Text, View } from '@/components/Themed';
import Products from '@/components/Products';

export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Images</Text>
      
      <Products  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textShadowColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0'
  },
});

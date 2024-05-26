import {  StyleSheet, ActivityIndicator } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Image } from '@rneui/themed';

const BASE_URI = '../assets/images/bulb.png'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <Image
            source={{ uri: BASE_URI }}
            containerStyle={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textShadowColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  image: {
    flex: 1,
    width: '40%',
    backgroundColor: '#fff',
  },
});

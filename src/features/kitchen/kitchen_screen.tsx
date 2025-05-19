import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KitchenScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>Kitchen Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default KitchenScreen; 
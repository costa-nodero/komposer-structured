import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrdersScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>Orders Screen</Text>
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

export default OrdersScreen; 
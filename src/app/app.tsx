import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PosScreen from '../features/pos/pos_screen';
import OrdersScreen from '../features/orders/orders_screen';
import KitchenScreen from '../features/kitchen/kitchen_screen';

const Tab = createMaterialTopTabNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="POS">
      <Tab.Screen name="POS" component={PosScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Kitchen" component={KitchenScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;

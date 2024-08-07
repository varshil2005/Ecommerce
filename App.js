import {View, Text, TextInput} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';
import {configurestore} from './app/Container/Redux/store';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './app/Navigation/BottomNavigator/BottomNavigator';

export default function App() {
  const store = configurestore();


  return (
    <Provider store={store}>
     
        <NavigationContainer>
          <BottomNavigator/>
        </NavigationContainer>
    
    </Provider>
  );
}

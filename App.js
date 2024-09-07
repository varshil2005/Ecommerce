import {View, Text, TextInput} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';
import {configurestore} from './app/Container/Redux/store';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './app/Navigation/BottomNavigator/BottomNavigator';
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  const {store,persistor} = configurestore();

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <BottomNavigator/>
        </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}

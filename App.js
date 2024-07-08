import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SignUp from './app/Container/SignUp/SignUp';
import Homepage from './app/Container/homepage/Homepage';
import Filter from './app/Container/Filter/Filter';
import Rating from './app/Container/Ratingandreview/Rating';
import Counter from './app/Container/Counter/Counter';
import { Provider } from 'react-redux';
import { configurestore } from './app/Container/Redux/store';
export default function App() {
  const store = configurestore();
  return (
    // <Filter />
    <Provider store={store}>
    <Counter/>
    </Provider>
   
  )
}
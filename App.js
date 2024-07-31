import {View, Text, TextInput} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SignUp from './app/Container/SignUp/SignUp';
import Homepage from './app/Container/homepage/Homepage';
import Filter from './app/Container/Filter/Filter';
import Rating from './app/Container/Ratingandreview/Rating';
import Counter from './app/Container/Counter/Counter';
import {Provider} from 'react-redux';
import {configurestore} from './app/Container/Redux/store';
import Forgot from './app/Container/Forget/Forgot';
import Login from './app/Container/Login/Login';
import OrderDetails from './app/Container/OrderDetails/OrderDetails';
import ShippingAddresses from './app/Container/ShippingAddress/ShippingAddresses';
import Womens_top from './app/Container/Womentops/Womens_top';
import AddShipingAddress from './app/Container/Addshipping/AddShipingAddress';
import ProductCard from './app/Container/Productcard/ProductCard';
import SubCategories2 from './app/Container/Subcatgory/shooping';
import FavoritesPage from './app/Container/Favorite Page/FavoritesPage';
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

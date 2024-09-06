import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Homepage from '../../Container/homepage/Homepage';
import Womens_top from '../../Container/Shop/shop';
import FavoritesPage from '../../Container/Favorite Page/FavoritesPage';
import { bagstack, favouritestack, homestack, profilestack, shopstack } from '../StckNavigation';
import My_Bag from '../../Container/Bag/My_Bag';
import BottomSheet from '../../Container/BottomSheet/Bottomsheet';
import SignUp from '../../Container/SignUp/SignUp';


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {

  return (
   
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'ShopTab') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'BagTab') {
          iconName = focused ? 'shopping' : 'shopping-outline';
        } else if (route.name === 'ProfileTab') {
          iconName = focused ? 'account' : 'account-outline';
        } else if (route.name === 'FavouriteTab') {
          iconName = focused ? 'heart' : 'heart-outline';
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
{/* 
<Tab.Screen name="SignUp" component={SignUp} options={{
          headerShown :false,
          tabBarLabel: 'Signup',
        }}/> */}
    <Tab.Screen name="HomeTab" component={homestack} options={{
          headerShown :false,
          tabBarLabel: 'Home',
        }}/>
    <Tab.Screen name="ShopTab" component={shopstack} options={{
          headerShown :false,
          tabBarLabel: 'Shop',
        }}/>
        <Tab.Screen name="BagTab" component={bagstack} options={{
          headerShown :false,
          tabBarLabel: 'Bag',
        }} />
    {/* <Tab.Screen name="Bag" component={FavoritesPage} /> */}
    <Tab.Screen name="FavouriteTab" component={favouritestack} options={{
          headerShown :false,
          tabBarLabel: 'Favourite',
        }} />

<Tab.Screen name="ProfileTab" component={profilestack} options={{
          headerShown :false,
          tabBarLabel: 'Profile',
        }} />



    
    </Tab.Navigator>


  )
}
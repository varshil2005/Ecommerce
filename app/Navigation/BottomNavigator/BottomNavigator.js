import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Homepage from '../../Container/homepage/Homepage';
import Womens_top from '../../Container/Womentops/Womens_top';
import FavoritesPage from '../../Container/Favorite Page/FavoritesPage';
import { bagstack, favouritestack, homestack, profilestack } from '../StckNavigation';
import My_Bag from '../../Container/Bag/My_Bag';


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {

  return (
   
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Shop') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'Bag') {
          iconName = focused ? 'shopping' : 'shopping-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'account' : 'account-outline';
        } else if (route.name === 'Favourite') {
          iconName = focused ? 'heart' : 'heart-outline';
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
    <Tab.Screen name="Home" component={homestack} options={{
          headerShown :false,
          tabBarLabel: 'Home',
        }}/>
    <Tab.Screen name="Shop" component={Womens_top} options={{
          headerShown :false,
          tabBarLabel: 'Shop',
        }}/>
        <Tab.Screen name="Bag" component={bagstack} options={{
          headerShown :false,
          tabBarLabel: 'Bag',
        }} />
    {/* <Tab.Screen name="Bag" component={FavoritesPage} /> */}
    <Tab.Screen name="Favourite" component={favouritestack} options={{
          headerShown :false,
          tabBarLabel: 'Favourite',
        }} />

<Tab.Screen name="Profile" component={profilestack} options={{
          headerShown :false,
          tabBarLabel: 'Profile',
        }} />



    
    </Tab.Navigator>

  )
}
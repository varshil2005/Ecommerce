import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homepage from '../../Container/homepage/Homepage';
import Womens_top from '../../Container/Womentops/Womens_top';
import FavoritesPage from '../../Container/Favorite Page/FavoritesPage';
import { favouritestack, homestack } from '../StckNavigation';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {

  return (
   
    <Tab.Navigator>
    <Tab.Screen name="Home" component={homestack} options={{
          headerShown :false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"gray"} size={size} />
          ),
        }}/>
    <Tab.Screen name="Shop" component={Womens_top} options={{
          headerShown :false,
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={"gray"} size={size} />
          ),
        }}/>
    {/* <Tab.Screen name="Bag" component={FavoritesPage} /> */}
    <Tab.Screen name="Favourite" component={favouritestack} options={{
          headerShown :false,
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" color={"gray"} size={size} />
          ),
        }} />

    
    </Tab.Navigator>

  )
}
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from '../Container/homepage/Homepage';
import ProductCard from '../Container/Productcard/ProductCard';
import FavoritesPage from '../Container/Favorite Page/FavoritesPage';
import My_Bag from '../Container/Bag/My_Bag';
import Womens_top from '../Container/Womentops/Womens_top';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderDetails from '../Container/OrderDetails/OrderDetails';
import My_profile from '../Container/Profile/My_Profile';
import My_Order from '../Container/order/My_Order';
import ShippingAddresses from '../Container/ShippingAddress/ShippingAddresses';
import Rating from '../Container/Ratingandreview/Rating';
import Success from '../Container/Sucess/Success';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const Stack = createNativeStackNavigator();

// function Productcartbar ({navigation}) {
//   return (
//     <View style={styles.ArrowView}>
//     <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
//     <Text style={styles.ArrowText}>Short dress</Text>
//     <TouchableOpacity><MaterialIcons name="share" size={30} color="black" style={{ marginTop: 27 }} /></TouchableOpacity>
// </View>

//     )
// }

const Letfbutton = ({nav}) => {
  return (
    <TouchableOpacity
    onPress={() => nav.goBack() }
    title="Info"
    color="#fff"
 ><MaterialCommunityIcons name = 'chevron-left' size={30}/></TouchableOpacity> 
  )
}

export const homestack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign : 'center' ,}}>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen 
          name="Product" 
          component={ProductCard} 
          options={{
            title: 'Product',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => (
             <Letfbutton nav={navigation}/>
            ),
            headerRight: () => (
              <TouchableOpacity
              // onPress={() => nav.goBack() }
              title="Info"
              color="#000"
           ><MaterialCommunityIcons name = 'share-variant' size={20}/></TouchableOpacity> 
             ),

          }}
          />
    </Stack.Navigator>
  );
};

export const favouritestack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favourite" component={FavoritesPage} />
      <Stack.Screen name="Product" component={ProductCard} />
      <Stack.Screen 
      name="Bag" 
      component={My_Bag}
      
       />
    </Stack.Navigator>
  );
};

export const shopstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="women_top" component={Womens_top} />
      <Stack.Screen name="Product" component={ProductCard} />
    </Stack.Navigator>
  );
};

export const bagstack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="my_bag" 
        component={My_Bag} 
        options={{
          title: 'My Bag',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => (
           <Letfbutton nav={navigation}/>
          ),
          headerRight: () => (
            <TouchableOpacity
            // onPress={() => nav.goBack() }
            title="Info"
            color="#000"
         ><MaterialCommunityIcons name = 'share-variant' size={20}/></TouchableOpacity> 
           ),
  
        }}
        />
      {/* <Stack.Screen name="shippingaddress" component={ShippingAddresses} /> */}
    </Stack.Navigator>
  );
};

export const profilestack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My_Profile" component={My_profile} />
      <Stack.Screen name="My_Order" component={My_Order} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="shippingaddress" component={ShippingAddresses} />
      <Stack.Screen name="rating" component={Rating} />
      <Stack.Screen name="Sucess" component={Success} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  ArrowView: {
    width: '100%',
    height: verticalScale(80),
    marginTop: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ArrowText: {
    color: 'black',
    fontSize: moderateScale(23),
    marginTop: verticalScale(28),
    fontFamily: 'Metropolis-SemiBold',
  },
  KeyboardArrow: {
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(-15),
  },
});

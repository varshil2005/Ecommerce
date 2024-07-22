import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../Container/homepage/Homepage';
import ProductCard from '../Container/Productcard/ProductCard';
import FavoritesPage from '../Container/Favorite Page/FavoritesPage';
import My_Bag from '../Container/Bag/My_Bag';
import Womens_top from '../Container/Womentops/Womens_top';

import OrderDetails from '../Container/OrderDetails/OrderDetails';
import My_profile from '../Container/Profile/My_Profile';
import My_Order from '../Container/order/My_Order';
import ShippingAddresses from '../Container/ShippingAddress/ShippingAddresses';
import Rating from '../Container/Ratingandreview/Rating';
import Success from '../Container/Sucess/Success';


const Stack = createNativeStackNavigator();


export const homestack = () => {
    return (
        <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Product" component={ProductCard} />
      
    </Stack.Navigator>
    )
}

export const favouritestack = () => {
    return (
        <Stack.Navigator>
      <Stack.Screen name="Favourite" component={FavoritesPage} />
      <Stack.Screen name="Product" component={ProductCard} />
      <Stack.Screen name="Bag" component={My_Bag} />
      
    </Stack.Navigator>
    )
}



  export const shopstack = () => {
    return (
      <Stack.Navigator>
         <Stack.Screen name="women_top" component={Womens_top} />
        <Stack.Screen name="Product" component={ProductCard} />
       
      </Stack.Navigator>
    )
  }

  export const bagstack = () => {
    return (
      <Stack.Navigator>
         <Stack.Screen name="my_bag" component={My_Bag} />
         {/* <Stack.Screen name="shippingaddress" component={ShippingAddresses} /> */}
 
       
      </Stack.Navigator>
    )
  }

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
    )
  }

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../Container/homepage/Homepage';
import ProductCard from '../Container/Productcard/ProductCard';
import FavoritesPage from '../Container/Favorite Page/FavoritesPage';

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
      
    </Stack.Navigator>
    )
}
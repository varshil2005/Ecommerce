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
import Fontisto from 'react-native-vector-icons/Fontisto';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import AddShipingAddress from '../Container/Addshipping/AddShipingAddress';
import CategoriesTwo from '../Container/Category/category';
import Filter from '../Container/Filter/Filter';
import SubCategories2 from '../Container/Subcatgory/shooping';
import shooping from '../Container/Subcatgory/shooping';

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

function Letfbutton({nav}) {
  return (
    <TouchableOpacity 
    onPress={() => nav.goBack()} 
    title="Info" color="#fff">
      <MaterialCommunityIcons name="chevron-left" size={30} />
    </TouchableOpacity>
  );
};
function Rightbutton  ({nav}) {
  return (
    <TouchableOpacity title="Info" color="#fff">
      <MaterialCommunityIcons name="share-variant-outline" size={25} />
    </TouchableOpacity>
  );
};


export const homestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen 
        name="Shopping" 
        component={shooping} 
        options={({navigation}) => ({
          title: 'Shopping',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
        })}
        />
      <Stack.Screen
        name="Product"
        component={ProductCard}
        options= {({navigation}) => ({
          title: 'Product',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
          headerRight: () => <Rightbutton nav={navigation} />
        })}
      />
      <Stack.Screen 
          name="Bag" 
          component={My_Bag} 
          options={({navigation}) => ({
            title: 'My Bag',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
      <Stack.Screen 
          name="addshippingaddress" 
          component={AddShipingAddress} 
          options={({navigation}) => ({
            title: 'Add Shipping Address',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
     <Stack.Screen 
        name="shippingaddress" 
        component={ShippingAddresses} 
        options={({navigation}) => ({
          title: 'Shipping Address',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
        })}
        />
      <Stack.Screen 
          name="Sucess" 
          component={Success} 
          options={({navigation}) => ({
            title: 'Sucess',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
         
            headerLeft : () => (null)
          })}
          />
      <Stack.Screen 
          name="Subcategory" 
          component={CategoriesTwo} 
          options={({navigation}) => ({
            title: 'category',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
            headerRight : () => (
              <TouchableOpacity onPress={() => nav.goBack()} title="Info" color="#fff">
             <Fontisto style={{ paddingTop: 9 }} name="search" size={20} color="black" />
            </TouchableOpacity>
            )
          })}
          />
            
    </Stack.Navigator>
  );
};
export const shopstack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen 
          name="women_top" 
          component={Womens_top} 
          options={({navigation}) => ({
            title: 'Women top',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
            headerRight : () => (
              <TouchableOpacity onPress={() => nav.goBack()} title="Info" color="#fff">
             <Fontisto style={{ paddingTop: 9 }} name="search" size={25} color="black" />
            </TouchableOpacity>
            )
          })}
          />
      <Stack.Screen 
          name="Product" 
          component={ProductCard} 
          options={({navigation}) => ({
            title: 'Product',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
            headerRight: () => <Rightbutton nav={navigation} />
          })}
          />
      <Stack.Screen 
          name="Bag" 
          component={My_Bag} 
          options={({navigation}) => ({
            title: 'My Bag',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
      <Stack.Screen 
          name="addshippingaddress" 
          component={AddShipingAddress} 
          options={({navigation}) => ({
            title: 'Add Shipping Address',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
      <Stack.Screen 
        name="shippingaddress" 
        component={ShippingAddresses} 
        options={({navigation}) => ({
          title: 'Shipping Address',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
        })}
        />
     <Stack.Screen 
          name="Sucess" 
          component={Success} 
          options={({navigation}) => ({
            title: 'Sucess',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft : () => (null)
          })}
          />
          <Stack.Screen 
          name="Filter" 
          component={Filter} 
          options={({navigation}) => ({
            title: 'Filter',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
    </Stack.Navigator>
  );
};

export const favouritestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen 
          name="Favourite" 
          component={FavoritesPage} 
          options={({navigation}) => ({
            title: 'Favourite',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerRight : () => (
              <TouchableOpacity onPress={() => nav.goBack()} title="Info" color="#fff">
             <Fontisto style={{ paddingTop: 9 }} name="search" size={20} color="black" />
            </TouchableOpacity>
            )
           
          })}
          />
      <Stack.Screen 
          name="Product" 
          component={ProductCard} 
          options={({navigation}) => ({
            title: "Product",
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
            headerRight: () => <Rightbutton nav={navigation} />
          })}
          />

      <Stack.Screen 
          name="Bag" 
          component={My_Bag} 
          options={({navigation}) => ({
            title: 'My Bag',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
      <Stack.Screen 
          name="addshippingaddress" 
          component={AddShipingAddress} 
          options={({navigation}) => ({
            title: 'Add Shipping Address',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
 <Stack.Screen 
        name="shippingaddress" 
        component={ShippingAddresses} 
        options={({navigation}) => ({
          title: 'Shipping Address',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
        })}
        />
     <Stack.Screen 
          name="Sucess" 
          component={Success} 
          options={({navigation}) => ({
            title: 'Sucess',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
           
            headerLeft : () => (null)
          })}
          />
    </Stack.Navigator>
  );
};



export const bagstack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="my_bag"
        component={My_Bag}
        options={({navigation}) => ({
          title: 'My Bag',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
        })}
      />
        <Stack.Screen 
          name="addshippingaddress" 
          component={AddShipingAddress} 
          options={({navigation}) => ({
            title: 'Add Shipping Address',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
 <Stack.Screen 
        name="shippingaddress" 
        component={ShippingAddresses} 
        options={({navigation}) => ({
          title: 'Shipping Address',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
        })}
        />
     <Stack.Screen 
          name="Sucess" 
          component={Success} 
          options={({navigation}) => ({
            title: 'Sucess',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            
            headerLeft : () => (null)
          })}
          />
    </Stack.Navigator>
  );
};

export const profilestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen 
          name="My_Profile" 
          component={My_profile} 
          options={({navigation}) => ({
            title: 'My Profile',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerRight : () => (
              <TouchableOpacity onPress={() => nav.goBack()} title="Info" color="#fff">
             <Fontisto style={{ paddingTop: 9 }} name="search" size={20} color="black" />
            </TouchableOpacity>
            )
           
          })}
          />
      <Stack.Screen 
          name="My_Order" 
          component={My_Order} 
          options={({navigation}) => ({
            title: 'My Order',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
            headerRight : () => (
              <TouchableOpacity onPress={() => nav.goBack()} title="Info" color="#fff">
             <Fontisto style={{ paddingTop: 9 }} name="search" size={20} color="black" />
            </TouchableOpacity>
            )
           
          })}
          />
      <Stack.Screen 
            name="OrderDetails" 
            component={OrderDetails} 
            options={({navigation}) => ({
              title: 'OrderDetails',
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: '#000',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              // },
              headerLeft: () => <Letfbutton nav={navigation} />,
              headerRight : () => (
                <TouchableOpacity onPress={() => nav.goBack()} title="Info" color="#fff">
               <Fontisto style={{ paddingTop: 9 }} name="search" size={20} color="black" />
              </TouchableOpacity>
              )
             
            })}
            />
      <Stack.Screen 
        name="shippingaddress" 
        component={ShippingAddresses} 
        options={({navigation}) => ({
          title: 'Shipping Address',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerLeft: () => <Letfbutton nav={navigation} />,
        })}
        />
      <Stack.Screen 
          name="rating" 
          component={Rating} 
          options={({navigation}) => ({
            title: 'Rating & Reviews',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
           
          })}
          />
     <Stack.Screen 
          name="Sucess" 
          component={Success} 
          options={({navigation}) => ({
            title: 'Sucess',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerLeft: () => <Letfbutton nav={navigation} />,
          })}
          />
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

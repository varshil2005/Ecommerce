import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import {useDispatch, useSelector} from 'react-redux';
import {getfavourite, togglefavourite} from '../Redux/Slice/Favourite.Slice';
import {getPrdouct} from '../Redux/Slice/Product.slice';
import RBSheet from 'react-native-raw-bottom-sheet';


export default function FavoritesPage({route, navigation}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getfavourite());
    dispatch(getPrdouct());
  }, []);

  const FavData = useSelector(state => state.togglefavourite);
  console.log('fghjkdyasydauvfsdavs', FavData.Favourite);

  const getProductdata = useSelector(state => state.Product);
  console.log('fghjkdyasydauvfsdavseeeeeee', getProductdata.productdata);

  const FavouriteData = getProductdata.productdata.filter(v =>
    FavData.Favourite.find(v1 => v1.pid === v.id),
  );
  console.log('vvvvvvvvvvvvvvv', FavouriteData);

  //   console.log("kddkdkdkdkdkdkdkdkdkdkdkoepepepeooe",favdatas);

  const NewProductCard = ({v}) => (
    <TouchableOpacity
      style={styles.olldeta}
      onPress={() => navigation.navigate('Product',{
        id:v.id,
      })}>
      <Image source={{uri: v?.url}} style={styles.img} />
      <View style={styles.pullovertext}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.protext2}>{v.name}</Text>
          <TouchableOpacity onPress={() => dispatch(togglefavourite(v.id))}>
            <Fontisto name="close-a" size={18} color="#B9B9B9" />
          </TouchableOpacity>
        </View>

        <Text style={styles.protext}>{v.desc}</Text>
        <View>
          <Text style={styles.price}>{v.price}$</Text>
        </View>
        <View style={styles.iconview}>
          <View style={styles.star}>
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <Text style={styles.starrating}>{v.ratting}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.shoppingcard}>
              <Fontisto name="shopping-bag" size={18} color="#F9F9F9" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );


  return (
    <ScrollView style={styles.container}>
      <StatusBar animated={true} backgroundColor={'transparent'} />

      <FlatList
        data={FavouriteData}
        renderItem={({item}) => <NewProductCard v={item} />}
        keyExtractor={item => item.id}
        // horizontal={true}
      />
    
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: horizontalScale(19),
    paddingTop: horizontalScale(13),
  },
  fonts: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Metropolis-Bold',
    marginBottom: horizontalScale(15),
    marginTop: horizontalScale(35),
  },
  fav_tshirts: {
    width: horizontalScale(90),
    height: verticalScale(35),
    backgroundColor: 'black',
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textfont: {
    fontSize: moderateScale(14),
    fontFamily: 'Metropolis-Bold',
    color: 'white',
  },
  product: {
    // marginHorizontal: 10,
    paddingRight: horizontalScale(9),
  },

  olldeta: {
    flexDirection: 'row',
    height: 135,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(15),
  },
  pullovertext: {
    flex: 1,
    margin: '3%',
  },
  protext: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: 'Metropolis-Bold',
  },
  protext2: {
    color: '#9B9B9B',
    fontSize: moderateScale(14),
    // flexDirection:'row'
  },
  iconview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: verticalScale(9),
    paddingTop: verticalScale(7),
  },
  price: {
    color: 'black',
    fontSize: moderateScale(18),
  },
  img: {
    width: '30%',
    height: '100%',
    borderBottomLeftRadius: horizontalScale(10),
    borderTopLeftRadius: horizontalScale(10),
  },

  star: {
    paddingTop: verticalScale(7),
    flexDirection: 'row',
    columnGap: horizontalScale(2),
  },
  starrating: {
    color: '#9B9B9B',
    fontSize: moderateScale(15),
    bottom: verticalScale(3),
  },
  shoppingcard: {
    // position: 'relative',
    // bottom: verticalScale(-10),
    backgroundColor: '#DB2032',
    height: verticalScale(45),
    width: horizontalScale(45),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtertoch: {
    flexDirection: 'row',
  },
  FontAwesomeicon: {
    paddingTop: horizontalScale(9),
    position: 'absolute',
    right: horizontalScale(0),
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  bottomSheetContainer: {
    padding: 20,
  },
  bottomSheetText: {
    fontSize: 18,
    color: 'black',
  },
});

import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/metrics/Metrics';

const data = [
  {
    id: 1,
    title: 'T-shirts',

  },
  {
    id: 2,
    title: 'Crop tops',

  },
  {
    id: 3,
    title: 'sleeveless',

  },
  {
    id: 4,
    title: 'Shirts',

  }
]
const data2 = [
  {
    id: 1,
    title: 'Pullover',
    subtitle: 'Mango',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 51,
    ratting: 3
  },
  {
    id: 2,
    title: 'Blouse',
    subtitle: 'Dorothy Perkins',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 34,
    ratting: 0
  },
  {
    id: 3,
    title: 'T-Shirt',
    subtitle: 'LOST ink',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 12,
    ratting: 10
  },
  {
    id: 4,
    title: 'Shirt',
    subtitle: 'Topshop',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 51,
    ratting: 3
  }
]
export default function Womens_top() {

  const ProductCard = ({ v }) => (

    <TouchableOpacity style={styles.product}>
      <View style={styles.fav_tshirts}><Text style={styles.textfont}>{v.title}</Text></View>

    </TouchableOpacity>
  );
  const NewProductCard = ({ v }) => (
    <TouchableOpacity style={styles.olldeta}>
      <Image source={v.image} style={styles.img} />
      <View style={styles.pullovertext}>
        <Text style={styles.protext}>{v.title}</Text>
        <Text style={styles.protext2}>{v.subtitle}</Text>

        <View style={styles.iconview}>
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <Text style={styles.starrating}>({v.ratting})</Text>
        </View>
        <Text style={styles.price}>{v.price}$</Text>
        
      </View>
      <TouchableOpacity style={styles.heart}>
          <FontAwesome name="heart-o" size={20} color="#B9B9B9"/>
      </TouchableOpacity>

    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
      />
      <View style={styles.leftarow}>
        <TouchableOpacity><FontAwesome name="angle-left" size={45} color="black" /></TouchableOpacity>
        <TouchableOpacity><Fontisto style={{ paddingTop: 9 }} name="search" size={25} color="black" /></TouchableOpacity>
      </View>
      <Text style={styles.fonts}>Women's tops</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard v={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />

      <View style={styles.fontsicon}>
        <TouchableOpacity style={styles.filtertoch}><Ionicons name="filter" size={26} color="black" /><Text style={styles.filter}>filters</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filtertoch}><FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filter}>price:lowest to high</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filtertoch}><FontAwesome name="th" size={26} color="black" /></TouchableOpacity>
      </View>

      <FlatList
        data={data2}
        renderItem={({ item }) => <NewProductCard v={item} />}
        keyExtractor={item => item.id}
      // horizontal={true}
      />


    </ScrollView>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: horizontalScale(19),
    paddingTop: horizontalScale(13)
  },
  leftarow:{
 justifyContent: 'space-between',
  flexDirection: 'row'
  },
  fonts: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Metropolis-Bold',
    marginBottom: horizontalScale(15),
    marginTop: horizontalScale(35)
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
  fontsicon: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    marginBottom: verticalScale(20)
  },
  filter: {
    color: 'black',
    // paddingRight: verticalScale(30),
    marginLeft: 10
  },
  olldeta: {
    flexDirection: 'row',
    height: 135,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(15),
    position: 'relative'
  },
  pullovertext: {
    margin: '3%',
    
  },
  protext: {
    color: 'black',
    fontSize: moderateScale(24),
    fontFamily: 'Metropolis-Bold',
  },
  protext2: {
    color: '#9B9B9B',
    fontSize: moderateScale(15),
  },
  iconview: {
    flexDirection: 'row',
    paddingBottom: verticalScale(9),
    paddingTop: verticalScale(7),
    columnGap: horizontalScale(4)
  },
  price: {
    color: 'black',
    fontSize: moderateScale(20),

  },
  img: {
    width: '30%',
    height: '100%',
    borderBottomLeftRadius: horizontalScale(10),
    borderTopLeftRadius: horizontalScale(10),
  },
  filtertoch: {
    flexDirection: 'row'
  },
  heart: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  starrating: {
    color: '#9B9B9B',
    fontSize: 15,
    bottom: 3
  },
});
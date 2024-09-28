import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

import React, {useEffect} from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchcategory} from '../Redux/Slice/category.slice';
import {getPrdouct} from '../Redux/Slice/Product.slice';



const newData = [
  {
    id: 1,
    title: 'Dorothy Perkins',
    subtitle: 'Evening  Dress',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 20,
    disscount: 10,
  },
  {
    id: 2,
    title: 'Dorothy Perkins',
    subtitle: 'Evening  Dress',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 20,
    disscount: 10,
  },
  {
    id: 3,
    title: 'Dorothy Perkins',
    subtitle: 'Evening  Dress',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 20,
    disscount: 10,
  },
  {
    id: 4,
    title: 'Dorothy Perkins',
    subtitle: 'Evening  Dress',
    image: require('../../../assets/image/newproduct.jpg'),
    price: 20,
    disscount: 10,
  },
];

export default function Homepage({route, navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcategory());
    dispatch(getPrdouct());
  }, []);

  const productdata = useSelector(state => state.Product);
  console.log('mil gaya', productdata.productdata);

  const category = useSelector(state => state.category);
  console.log(category.categorydata);

  const ProductCart = ({v}) => (
    <View>
      <TouchableOpacity
        style={{marginHorizontal: horizontalScale(14)}}
        onPress={() => navigation.navigate('Product',{
          id : v.id
        })}>
        <Image source={{uri : v?.url}} style={style.product}></Image>
        <View style={style.rating}>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
        </View>
        <Text style={{fontSize: 11}}>{v.name}</Text>
        <Text style={{fontSize: 16, color: 'black'}}>{v.desc}</Text>
        <View style={style.priceview}>
          <Text style={style.pricetext}>{v.price}$</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const NewProductCart = ({v}) => (
    <View>
      <TouchableOpacity
        style={{marginHorizontal: horizontalScale(14)}}
        onPress={() => navigation.navigate('Product',{
          id : v.id
        })}>
        <Image source={v.image} style={style.product}></Image>
        <View style={style.rating}>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#FFBA49"></MaterialIcons>
        </View>
        <Text style={{fontSize: 11}}>{v.title}</Text>
        <Text style={{fontSize: 16, color: 'black'}}>{v.subtitle}</Text>
        <View style={style.priceview}>
          <Text style={style.pricetext}>{v.price}$</Text>
        </View>
      </TouchableOpacity>
    </View>
  );


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        style={style.backgroundimage}
        source={require('../../../assets/image/pexels-godisable-jacob-226636-896293.jpg')}></ImageBackground>

      <View style={{width: '70%'}}>
        <Text style={style.title}>Fashion Sale</Text>

        <TouchableOpacity
          style={style.checkbutton}
          onPress={() => navigation.navigate('Subcategory')}>
          <Text style={style.checktext}>Check</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={style.saleview}>
          <View>
            <Text style={style.saletext}>Sale</Text>
            <Text style={{fontSize: 11, fontFamily: 'Metropolis-Regular'}}>
              Super summer sale
            </Text>
          </View>

          <Text style={style.viewalltext}>View All</Text>
        </View>

        <FlatList
          data={productdata.productdata}
          renderItem={({item}) => <ProductCart v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>

      <View>
        <View style={style.saleview}>
          <View>
            <Text style={style.saletext}>New</Text>
            <Text style={{fontSize: 11, fontFamily: 'Metropolis-Regular'}}>
              You've never seen it before!
            </Text>
          </View>

          <Text style={style.viewalltext}>View All</Text>
        </View>

        <FlatList
          data={newData}
          renderItem={({item}) => <NewProductCart v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>

      {category.categorydata.map((v, i) => (
        <View style={{marginTop: verticalScale(40)}}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Subcategory', {
                  cate_id: v.id,
                })
              }>
              <ImageBackground
                source={require('../../../assets/image/newcollection.png')}
                style={style.backgroundimage2}></ImageBackground>

              <View>
                <Text style={style.collectiontext}>{v.name}</Text>
              </View>
            </TouchableOpacity>

            <View style={style.collectionview}>
              <View style={{width: '50%'}}>
                <View style={{height: '50%'}}>
                  <TouchableOpacity>
                    <ImageBackground
                      source={require('../../../assets/image/summersale.png')}
                      style={style.summerimage}></ImageBackground>
                  </TouchableOpacity>
                  <View>
                    <Text style={style.summertext}>{v.name}</Text>
                  </View>
                </View>

                <View style={{height: '50%'}}>
                  <TouchableOpacity>
                    <ImageBackground
                      source={require('../../../assets/image/Blackimage.png')}
                      style={style.blackImage}></ImageBackground>
                  </TouchableOpacity>
                  <View>
                    <Text style={style.blacktext}>Black</Text>
                  </View>
                </View>
              </View>

              <View style={{width: '50%'}}>
                <ImageBackground
                  source={require('../../../assets/image/menhoodies.png')}
                  style={style.menhoddies}></ImageBackground>
                <View>
                  <Text>Men's hoodies</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
      <View style={{marginTop: verticalScale(40)}}>
        <View>
          <ImageBackground
            source={require('../../../assets/image/newcollection.png')}
            style={style.backgroundimage2}></ImageBackground>

          <View>
            <Text style={style.collectiontext}>New Collection</Text>
          </View>
        </View>

        <View style={style.collectionview}>
          <View style={{width: '50%'}}>
            <View style={{height: '50%'}}>
              <TouchableOpacity>
                <ImageBackground
                  source={require('../../../assets/image/summersale.png')}
                  style={style.summerimage}></ImageBackground>
              </TouchableOpacity>
              <View>
                <Text style={style.summertext}>Summer Sale</Text>
              </View>
            </View>

            <View style={{height: '50%'}}>
              <TouchableOpacity>
                <ImageBackground
                  source={require('../../../assets/image/Blackimage.png')}
                  style={style.blackImage}></ImageBackground>
              </TouchableOpacity>
              <View>
                <Text style={style.blacktext}>Black</Text>
              </View>
            </View>
          </View>

          <View style={{width: '50%'}}>
            <ImageBackground
              source={require('../../../assets/image/menhoodies.png')}
              style={style.menhoddies}></ImageBackground>
            <View>
              <Text>Men's hoodies</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(16),
  },

  product: {
    width: horizontalScale(148),
    height: 184,
    // backgroundColor : 'red',
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    borderRadius: moderateScale(8),
    marginBottom: 5,
  },

  rating: {
    flexDirection: 'row',
    color: '#FFBA49',
    marginBottom: 8,
  },

  backgroundimage: {
    width: '100%',
    height: verticalScale(550),
    position: 'relative',
  },

  title: {
    position: 'absolute',
    bottom: moderateScale(130),
    marginHorizontal: horizontalScale(15),
    color: 'white',
    fontSize: moderateScale(48),
    fontFamily: 'Metropolis-Black',
  },

  checkbutton: {
    position: 'absolute',
    bottom: moderateScale(75),
    backgroundColor: '#DB3022',
    marginHorizontal: horizontalScale(15),
    width: '60%',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(20),
  },

  checktext: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Metropolis-Regular',
  },

  saleview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(15),
    marginVertical: verticalScale(20),
    alignItems: 'center',
  },

  saletext: {
    fontSize: 34,
    fontFamily: 'Metropolis-Black',
    color: 'black',
  },

  viewalltext: {
    fontFamily: 'Metropolis-Regular',
    fontSize: 13,
    color: 'black',
  },

  priceview: {
    flexDirection: 'row',
  },

  pricetext: {
    color : 'red',
    fontFamily: 'Metropolis-Regular',
  },

  disscounttext: {
    marginLeft: 9,
    color: 'red',
    fontFamily: 'Metropolis-Regular',
  },

  backgroundimage2: {
    height: 400,
    position: 'relative',
  },

  collectiontext: {
    position: 'absolute',
    color: 'white',
    fontSize: moderateScale(30),
    fontFamily: 'Metropolis-Black',
    bottom: moderateScale(65),
    right: horizontalScale(20),
  },

  collectionview: {
    flexDirection: 'row',
    width: '100%',
    height: verticalScale(400),
    marginTop: -18,
  },

  summerimage: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  summertext: {
    width: '80%',
    position: 'absolute',
    color: 'red',
    bottom: verticalScale(60),
    fontSize: moderateScale(32),
    fontFamily: 'Metropolis-Black',
    left: moderateScale(25),
  },

  blackImage: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  blacktext: {
    position: 'absolute',
    color: 'white',
    bottom: verticalScale(30),
    fontSize: 34,
    fontFamily: 'Metropolis-Black',
    left: moderateScale(25),
  },

  menhoddies: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  hoodiestext: {
    position: 'absolute',
    color: 'white',
    bottom: verticalScale(30),
    fontSize: 34,
    fontFamily: 'Metropolis-Black',
    left: moderateScale(25),
  },
});

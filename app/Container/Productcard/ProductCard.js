import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SliderBox} from 'react-native-image-slider-box';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import Collapsible from 'react-native-collapsible';
import {useDispatch, useSelector} from 'react-redux';
import {prodBysub} from '../Redux/Slice/Shopping.slice';
import {addCart, AddToCart} from '../Redux/Slice/Cart.Slice';
import {getPrdouct} from '../Redux/Slice/Product.slice';
import {getfavourite, togglefavourite} from '../Redux/Slice/Favourite.Slice';

const Data = [
  {
    id: 1,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/image/newproduct.jpg'),
    price: 15,
    discount: 12,
  },
  {
    id: 0,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/image/newproduct.jpg'),
    price: 15,
    discount: 12,
  },
  {
    id: 2,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/image/newproduct.jpg'),
    price: 15,
    discount: 12,
  },
  {
    id: 3,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../../assets/image/newproduct.jpg'),
    price: 15,
    discount: 12,
  },
];
export default function ProductCard({route, navigation}) {
  console.log('ppppp', route?.params?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrdouct());
    dispatch(getfavourite());
  }, []);

  const productdata = useSelector(state => state.Product);
  console.log('Kkkkkkk', productdata.productdata);

  const filterdata = productdata.productdata.find(
    v => v.id === route?.params?.id,
  );
  console.log('filterdata', filterdata);
  const Fav = useSelector(state => state.togglefavourite);

  console.log('oopopopoFavFavFavFavFav', Fav);

  const auth = useSelector(state => state.auth)
console.log("ghjkl",auth);

  const [collapsed, setCollapsed] = React.useState(true);
  const [Collapsed2, setCollapsed2] = React.useState(true);
  const [ColLaPsed3, setCollapsed3] = React.useState(true);

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };
  const ToggleExpand2 = () => {
    setCollapsed2(!Collapsed2);
  };
  const ToggleExpand3 = () => {
    setCollapsed3(!ColLaPsed3);
  };
  console.log(
    'lllllllll',
    Fav.Favourite.some(v1 => v1?.pid === filterdata?.id),
  );

  const ProductCard = ({v}) => (
    <View style={{marginRight: 20}}>
      <Image
        source={v.img}
        style={{width: 170, height: 250, borderRadius: 10}}></Image>

      <View style={styles.iconview}>
        <FontAwesome
          name="star"
          size={17}
          style={{color: '#FFBA49', marginRight: 3}}
        />
        <FontAwesome
          name="star"
          size={17}
          style={{color: '#FFBA49', marginRight: 3}}
        />
        <FontAwesome
          name="star"
          size={17}
          style={{color: '#FFBA49', marginRight: 3}}
        />
        <FontAwesome
          name="star"
          size={17}
          style={{color: '#FFBA49', marginRight: 3}}
        />
        <FontAwesome
          name="star"
          size={17}
          style={{color: '#FFBA49', marginRight: 3}}
        />
        <Text style={{color: '#9B9B9B'}}>(10)</Text>
      </View>
      <View style={{position: 'relative'}}>
        <TouchableOpacity>
          <FontAwesome
            name={'heart-o'}
            size={20}
            color="red"
            style={styles.heart}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{v.title}</Text>
      <Text style={styles.subtitle}>{v.subtitle}</Text>
      <View style={styles.PriceView}>
        <Text style={styles.discount}>{v.discount}$</Text>
        <Text style={styles.price}>{v.price}$</Text>
      </View>
    </View>
  );

  const handleCart = id => {
    dispatch(AddToCart({id, uid: auth?.auth?.uid}));
    navigation.navigate('Bag');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <StatusBar
          animated={true}
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ScrollView style={styles.container}>
          <ScrollView horizontal>
            <Image
              source={{uri: filterdata?.url}}
              style={{
                width: 320,
                height: 480,
                resizeMode: 'cover',
                marginRight: 20,
              }}
            />
          </ScrollView>
          <View>
            <View style={styles.SizeBlackView}>
              <View style={styles.SizeView}>
                <Text style={styles.SizeText}>Size</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={25}
                  color="black"
                  style={styles.SizeArrow}
                />
              </View>
              <View style={styles.BlackView}>
                <Text style={styles.SizeText}>Black</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={25}
                  color="black"
                  style={styles.SizeArrow}
                />
              </View>
              <View style={{position: 'relative'}}>
                <TouchableOpacity
                  onPress={() => dispatch(togglefavourite(filterdata.id))}>
                  <FontAwesome
                    name={
                      Fav.Favourite.some(v1 => v1?.pid === filterdata?.id)
                        ? 'heart'
                        : 'heart-o'
                    }
                    size={20}
                    color="red"
                    style={styles.heart}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.HandMView}>
              <View>
                <Text style={styles.HAndM}>{filterdata?.name}</Text>
                <Text style={styles.ShortDress}>{filterdata?.desc}</Text>
                <View style={styles.iconview}>
                  <FontAwesome
                    name="star"
                    size={13}
                    style={{color: '#FFBA49', marginRight: 2, marginTop: 2}}
                  />
                  <FontAwesome
                    name="star"
                    size={13}
                    style={{color: '#FFBA49', marginRight: 2, marginTop: 2}}
                  />
                  <FontAwesome
                    name="star"
                    size={13}
                    style={{color: '#FFBA49', marginRight: 2, marginTop: 2}}
                  />
                  <FontAwesome
                    name="star"
                    size={13}
                    style={{color: '#FFBA49', marginRight: 2, marginTop: 2}}
                  />
                  <FontAwesome
                    name="star"
                    size={13}
                    style={{color: '#FFBA49', marginRight: 3, marginTop: 2}}
                  />
                  <Text style={{color: '#9B9B9B', fontSize: 13}}>(10)</Text>
                </View>
              </View>
              <View>
                <Text style={styles.HANdMPrice}>${filterdata?.price}</Text>
              </View>
            </View>

            <View style={styles.TextsView}>
              <Text style={styles.Texts}>{filterdata?.desc}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={toggleExpand}>
            <View style={styles.ItemView}>
              <Text style={styles.ItemText}>Item detail</Text>
              <MaterialIcons
                name="chevron-right"
                size={28}
                color="black"
                style={{marginTop: 8, marginRight: 4}}
              />
            </View>
            <Collapsible collapsed={collapsed}>
              <View>
                <Text style={styles.collapsedText}>
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable. The generated Lorem Ipsum is therefore
                  always free from repetition, injected humour, or
                  non-characteristic words etc.5paragraphswordsbytes lists Start
                  with 'Loremipsum dolor sit amet...'
                </Text>
              </View>
            </Collapsible>
          </TouchableOpacity>

          <TouchableOpacity onPress={ToggleExpand2}>
            <View style={styles.ShippingView}>
              <Text style={styles.ItemText}>Shipping info</Text>
              <MaterialIcons
                name="chevron-right"
                size={28}
                color="black"
                style={{marginTop: 8, marginRight: 4}}
              />
            </View>
            <Collapsible collapsed={Collapsed2}>
              <View>
                <Text style={styles.collapsedText}>
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable. The generated Lorem Ipsum is therefore
                  always free from repetition, injected humour, or
                  non-characteristic words etc.5paragraphswordsbytes lists Start
                  with 'Loremipsum dolor sit amet...'
                </Text>
              </View>
            </Collapsible>
          </TouchableOpacity>

          <TouchableOpacity onPress={ToggleExpand3}>
            <View style={styles.SupportView}>
              <Text style={styles.ItemText}>Support</Text>
              <MaterialIcons
                name="chevron-right"
                size={28}
                color="black"
                style={{marginTop: 8, marginRight: 4}}
              />
            </View>
            <Collapsible collapsed={ColLaPsed3}>
              <View>
                <Text style={styles.collapsedText}>
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable. The generated Lorem Ipsum is therefore
                  always free from repetition, injected humour, or
                  non-characteristic words etc.5paragraphswordsbytes lists Start
                  with 'Loremipsum dolor sit amet...'
                </Text>
              </View>
            </Collapsible>
          </TouchableOpacity>

          <View style={styles.LikeThisView}>
            <Text style={styles.LikeThisText}>You can also like this </Text>
            <Text style={styles.NumitemText}>12 item</Text>
          </View>
          <FlatList
            data={Data}
            renderItem={({item}) => <ProductCard v={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.ButtonView}
        onPress={() => handleCart(filterdata.id)}>
        <View style={styles.ButtonUnderView}>
          <Text style={styles.AddCart}>ADD TO CART</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    backgroundColor: '#F9F9F9',
    marginTop: 20,
  },
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
  SizeBlackView: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeView: {
    width: horizontalScale(140),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#F01F0E',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeText: {
    color: '#222222',
    fontFamily: 'Metropolis-Medium',
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(10),
    marginTop: verticalScale(13),
  },
  SizeArrow: {
    marginRight: horizontalScale(6),
    marginTop: verticalScale(10),
  },
  BlackView: {
    width: horizontalScale(140),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#9B9B9B',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: horizontalScale(30),
  },

  heart: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  HandMView: {
    marginTop: verticalScale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HAndM: {
    color: 'black',
    fontFamily: 'Metropolis-SemiBold',
    fontSize: moderateScale(27),
  },
  ShortDress: {
    color: '#9B9B9B',
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(14),
  },
  iconview: {
    flexDirection: 'row',
    marginTop: verticalScale(8),
  },
  HANdMPrice: {
    color: 'black',
    fontSize: moderateScale(24),
    fontFamily: 'Metropolis-SemiBold',
    marginRight: horizontalScale(15),
  },
  TextsView: {
    marginTop: verticalScale(22),
    marginLeft: horizontalScale(14),
    width: '90%',
  },
  Texts: {
    color: '#222222',
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(15),
    lineHeight: verticalScale(20),
    textAlign: 'left',
  },
  ItemView: {
    marginTop: verticalScale(23),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#9B9B9B',
  },
  ItemText: {
    color: '#222222',
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(17),
    marginTop: verticalScale(15),
    marginBottom: verticalScale(15),
  },
  ShippingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#9B9B9B',
  },
  SupportView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#9B9B9B',
    borderBottomColor: '#9B9B9B',
    borderBottomWidth: 1,
  },
  LikeThisView: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(15),
  },
  LikeThisText: {
    color: '#222222',
    fontFamily: 'Metropolis-SemiBold',
    fontSize: moderateScale(19),
  },
  NumitemText: {
    color: '#9B9B9B',
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(13),
  },
  title: {
    color: 'black',
    paddingHorizontal: horizontalScale(4),
    fontSize: moderateScale(13),
    fontFamily: 'Metropolis-Regular',
    marginTop: verticalScale(5),
  },
  subtitle: {
    color: 'black',
    paddingHorizontal: horizontalScale(4),
    fontSize: moderateScale(19),
    fontFamily: 'Metropolis-SemiBold',
    marginTop: verticalScale(2),
  },
  PriceView: {
    flexDirection: 'row',
  },
  discount: {
    color: '#9B9B9B',
    fontSize: moderateScale(19),
    marginTop: verticalScale(2),
    paddingHorizontal: horizontalScale(3),
    textDecorationLine: 'line-through',
    fontFamily: 'Metropolis-Medium',
  },
  price: {
    color: '#DB3022',
    fontSize: moderateScale(19),
    marginTop: verticalScale(2),
    paddingLeft: horizontalScale(6),
    fontFamily: 'Metropolis-Medium',
  },
  heart2: {
    position: 'absolute',
    right: horizontalScale(0),
    bottom: verticalScale(10),
    padding: horizontalScale(10),
    padding: verticalScale(10),
    backgroundColor: 'white',
    borderRadius: moderateScale(23),
  },
  ButtonView: {
    backgroundColor: 'white',
    width: '100%',
    height: verticalScale(120),
  },
  ButtonUnderView: {
    backgroundColor: '#DB3022',
    width: horizontalScale(350),
    height: verticalScale(50),
    margin: 'auto',
    borderRadius: moderateScale(50),
  },
  AddCart: {
    color: '#FFFFFF',
    fontFamily: 'Metropolis-Medium',
    fontSize: moderateScale(17),
    margin: 'auto',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 10,
  },
  collapsedText: {
    color: '#222222',
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(15),
    lineHeight: verticalScale(20),
    marginBottom: verticalScale(10),
  },
});

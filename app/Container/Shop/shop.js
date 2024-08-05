import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import Collapsible from 'react-native-collapsible';
import {useDispatch, useSelector} from 'react-redux';
import {prodBysub} from '../Redux/Slice/Shopping.slice';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRef} from 'react';
import {Button} from 'react-native';
import {getPrdouct} from '../Redux/Slice/Product.slice';
import {fetchcategory} from '../Redux/Slice/category.slice';

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
    title: 'Blouses',
  },
  {
    id: 4,
    title: 'Shirt',
  },
];
const Data2 = [
  {
    id: 1,
    img: require('../../../assets/image/See_you.jpeg'),
    title: 'Mango',
    SubTitle: 'T-Shirt SPANISH',
    price: 9,
  },
  {
    id: 2,
    img: require('../../../assets/image/See_you.jpeg'),
    title: 'Mango',
    SubTitle: 'T-Shirt SPANISH',
    price: 9,
  },
  {
    id: 3,
    img: require('../../../assets/image/See_you.jpeg'),
    title: 'Mango',
    SubTitle: 'T-Shirt SPANISH',
    price: 9,
  },
  {
    id: 4,
    img: require('../../../assets/image/See_you.jpeg'),
    title: 'Mango',
    SubTitle: 'T-Shirt SPANISH',
    price: 9,
  },
];

const items = ['']; // Example items

const YourOwnComponent = () => (
  <View style={{padding: 20}}>
    <Text>This is your own component inside the bottom sheet</Text>
  </View>
);

export default function shop() {
  const [sort, setsort] = useState('');
  const [search, setsearch] = useState('');
  const [selectat, setselectcat] = useState('');
  const [press, setpress] = useState(false);

  const refRBSheet = useRef([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrdouct());
    dispatch(fetchcategory());
  }, []);

  const productdata = useSelector(state => state.Product);
  console.log('mil gaya', productdata.productdata);

  const category = useSelector(state => state.category);

  const renderItem = ({item, index, refRBSheet}) => {
    return (
      <View>
        <RBSheet ref={ref => (refRBSheet.current[index] = ref)}>
          <View style={styles.bottomSheetContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setsort('lh'), refRBSheet.current[0].close();
              }}>
              <Text style={styles.buttonText}>lowest to high</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setsort('hl'), refRBSheet.current[0].close();
              }}>
              <Text style={styles.buttonText}>high to lowest</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setsort('az'), refRBSheet.current[0].close();
              }}>
              <Text style={styles.buttonText}>A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setsort('za'), refRBSheet.current[0].close();
              }}>
              <Text style={styles.buttonText}>Z-A</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    );
  };

  const ProductCard = ({v, i}) =>  (
    i === 0 ? 
      <View style={styles.CategorisView}>
        <TouchableOpacity
          style={
            selectat === '' ? styles.selectedCategoryButton : styles.Options
          }
          onPress={() => setselectcat('')}>
          <View>
            <Text style={styles.OptionsText}>All</Text>
          </View>
        </TouchableOpacity>
      </View>
     : 
      <View style={styles.CategorisView}>
        <TouchableOpacity
          style={
            selectat === v.id ? styles.selectedCategoryButton : styles.Options
          }
          onPress={() => setselectcat(v.id)}>
          <View>
            <Text style={styles.OptionsText}>{v.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  const ProductData = ({v}) => (
    <View>
      {/* {
                productdata.productdata.map((v) => ( */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.productMainView}>
          <View style={styles.productImg}>
            <Image
              source={require('../../../assets/image/newproduct.jpg')}
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            />
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome
                name="heart-o"
                size={20}
                color="black"
                style={styles.heart}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.productText}>
            <View style={styles.iconview}>
              <FontAwesome name="star" size={20} style={{color: '#FFBA49'}} />
              <FontAwesome name="star" size={20} style={{color: '#FFBA49'}} />
              <FontAwesome name="star" size={20} style={{color: '#FFBA49'}} />
              <FontAwesome name="star" size={20} style={{color: '#FFBA49'}} />
              <FontAwesome name="star" size={20} style={{color: '#FFBA49'}} />
              <Text style={{color: '#9B9B9B'}}>(3)</Text>
            </View>
            <Text style={styles.mangoText}>{v.name}</Text>
            <Text style={styles.tShirt}>{v.desc}</Text>
            <Text style={styles.price}>{v.price}$</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const searchtext = () => {
    console.log('searchtext', press);
    const fdata = productdata.productdata.filter(
      v =>
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.desc.toLowerCase().includes(search.toLowerCase()) ||
        v.price.toString().includes(search),
    );

    const sdata = fdata.sort((a, b) => {
      if (sort === 'lh') {
        return a.price - b.price;
      } else if (sort === 'hl') {
        return b.price - a.price;
      } else if (sort === 'az') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'za') {
        return b.name.localeCompare(a.name);
      }
    });

    if (selectat != '') {
      const seledata = sdata.filter(v => v.category_id === selectat);
      return seledata;
    }

    return sdata;
  };

  const finaldata = searchtext();

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* <View style={styles.ArrowView}>
                <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Women's tops</Text>
                <TouchableOpacity><MaterialIcons name="search" size={30} color="black" style={{ marginTop: 25 }} /></TouchableOpacity>
            </View> */}

      <View style={{backgroundColor: 'white', marginBottom: 25}}>
       
    
            <FlatList
              data={category.categorydata}
              renderItem={({item, index}) => <ProductCard v={item} i={index} />}
              keyExtractor={item => item.id}
              horizontal={true}
            />
  
  

        <View style={styles.FilterOptions}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <MaterialIcons name="filter-list" size={30} color="black" />
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => refRBSheet.current[0].open()}>
            <FontAwesome name="arrows-v" size={26} color="black" />
            <Text style={styles.filterText}>Price:lowest to high</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="th-list" size={26} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <TextInput
            name="serch"
            placeholder="Search"
            onChangeText={setsearch}></TextInput>
        </View>
      </View>

      <FlatList
        data={finaldata}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Product', {
                // id: item.id,
                // cate_id: item.category_id,
                // subcate_id: item.Subcategory_id,
              })
            }>
            <ProductData v={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        // horizontal={true}
      />

      <View style={{flex: 1}}>
        <FlatList
          data={items}
          renderItem={props => renderItem({...props, refRBSheet})}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current[0].open()} // Example of opening the first item bottom sheet
      /> */}
        <RBSheet
          ref={refRBSheet.current[0]}
          useNativeDriver={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}
          customModalProps={{
            animationType: 'slide',
            statusBarTranslucent: true,
          }}
          customAvoidingViewProps={{
            enabled: false,
          }}>
          <YourOwnComponent />
        </RBSheet>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
    marginTop: 10,
  },
  ArrowView: {
    width: '100%',
    height: 80,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ArrowText: {
    color: 'black',
    fontSize: 23,
    marginTop: 22,
  },
  KeyboardArrow: {
    marginTop: 16,
    marginLeft: -15,
  },
  CategorisView: {
    paddingRight: horizontalScale(10),
    backgroundColor: 'white',
  },
  allbuttonView: {
    flexDirection: 'row',
    paddingRight: horizontalScale(10),
    backgroundColor: 'white',
  },
  Options: {
    width: horizontalScale(90),
    height: verticalScale(35),
    backgroundColor: 'black',
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  OptionsText: {
    fontSize: moderateScale(14),
    fontFamily: 'Metropolis-Bold',
    color: 'white',
  },
  FilterOptions: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    marginBottom: verticalScale(20),
  },
  filterText: {
    color: 'black',
    paddingRight: verticalScale(60),
    marginTop: 4,
    marginLeft: 10,
  },
  productMainView: {
    width: horizontalScale(160),
    height: 400,
    marginBottom: verticalScale(40),
    marginRight: horizontalScale(30),
  },
  productImg: {
    width: '100%',
    height: '68%',
    position: 'relative',
  },
  heart: {
    position: 'absolute',
    bottom: -10,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  productText: {
    width: '100%',
    height: '32%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 2,
  },
  iconview: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    marginTop: 5,
  },
  mangoText: {
    color: '#9B9B9B',
    fontSize: 15,
    paddingHorizontal: 6,
    marginTop: 6,
    fontFamily: 'Metropolis-SemiBold',
  },
  tShirt: {
    color: 'black',
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 18,
    paddingHorizontal: 6,
    marginTop: 3,
  },
  price: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Metropolis-Medium',
    paddingHorizontal: 7,
    marginTop: 4,
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

  selectedCategoryButton: {
    width: horizontalScale(90),
    height: verticalScale(35),
    backgroundColor: 'red',
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

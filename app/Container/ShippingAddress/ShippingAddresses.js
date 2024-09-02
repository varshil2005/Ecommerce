import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {horizontalScale, moderateScale} from '../../../assets/metrics/Metrics';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteAddress, getAddress} from '../Redux/Slice/Address.Slice';

const useaddresses = [
  {
    id: 1,
    name: 'Jane Doe',
    Addresses: '3 Newbridge Court',
    area: 'Chino Hills, CA 91709,',
    state: 'United States',
  },
  {
    id: 2,
    name: 'Jane Doe',
    Addresses: '3 Newbridge Court',
    area: 'Chino Hills, CA 91709,',
    state: 'United States',
  },
  {
    id: 3,
    name: 'Jane Doe',
    Addresses: '3 Newbridge Court',
    area: 'Chino Hills, CA 91709,',
    state: 'United States',
  },
];

export default function ShippingAddresses({route, navigation}) {

  const ShippingAddresses = ({v}) => (
    <View style={styles.olldeta}>
      <Text style={styles.addtext1}>{v.name}</Text>
      <Text style={styles.addtext}>{v.address}</Text>
      <Text style={styles.addtext}>{v.state}</Text>
      <Text style={styles.addtext}>{v.city}</Text>
      <Text style={styles.addtext}>{v.country}</Text>
      <Text style={styles.addtext}>{v.zipcode}</Text>

      <TouchableOpacity style={styles.UseShipping}>
        <FontAwesome name="check-square" size={25} color="black" />
        <Text style={styles.checkicontext}>Use as the shipping address</Text>
      </TouchableOpacity>
      <View style={styles.ViewEdit}>
        <TouchableOpacity onPress={() =>handleEdit(v)}>
          <MaterialCommunityIcons name="pencil" size={23} color="#9B9B9B" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>handleDelete(v)}>
          <MaterialCommunityIcons name="close" size={23} color="#9B9B9B" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress('varshil'));
  }, []);

  const Addressdata = useSelector(state => state.address);
  console.log('AddressdataAddressdata', Addressdata);

  const Address =  Addressdata?.Address[0]?.address

  
  console.log("AddressAddressAddressAddressAddressAddressAddress",Address);
  
  const handleDelete = (data) => {
    console.log("ididididi",data);
    
    dispatch(DeleteAddress(data))
}

const handleEdit = (data) => {
    navigation.navigate('addshippingaddress',
        data
    )

}

  return (
    <ScrollView style={styles.container}>
      <StatusBar animated={true} backgroundColor={'transparent'} />

      {/* <View style={styles.Ordertext}>
                <TouchableOpacity><FontAwesome name="angle-left" size={35} color="black" /></TouchableOpacity>
                <View style={styles.viewshipping}>
                    <Text style={styles.Ordertext2}>Shipping Addresses</Text>
                </View>
            </View> */}

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('addshippingaddress')}>
            <MaterialCommunityIcons
              name="plus-circle"
              size={35}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.orderButton}
            onPress={() => navigation.navigate('Sucess')}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={Address}
        renderItem={({item}) => <ShippingAddresses v={item} />}
        keyExtractor={item => item.id}
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
  Ordertext: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: horizontalScale(10),
  },
  Ordertext2: {
    color: 'black',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(18),
    paddingTop: horizontalScale(8),
  },
  viewshipping: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  olldeta: {
    padding: 15,
    // height: ,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(5),
    elevation: 2,
    position: 'relative',
  },
  addtext: {
    color: 'black',
    paddingBottom: 4,
  },
  addtext1: {
    color: 'black',
    paddingBottom: 4,
    fontSize: 16,
  },
  UseShipping: {
    flexDirection: 'row',
    columnGap: 9,
    paddingTop: 15,
  },
  checkicontext: {
    color: 'black',
    paddingTop: 4,
  },
  ViewEdit: {
    position: 'absolute',
    padding: 10,
    right: 1,
    flexDirection: 'row',
  },
  ViewEdittext: {
    color: 'red',
    paddingTop: 4,
  },
  ViewDelete: {
    position: 'absolute',
    padding: 35,
    right: 0,
  },
  addButton: {
    paddingTop: 16,
  },
  orderButton: {
    marginTop: 10,
    width: 100,
    paddingTop: 10,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

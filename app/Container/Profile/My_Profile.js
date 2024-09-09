// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import React from 'react';
// import { horizontalScale, moderateScale, verticalScale } from '../../../assets/metrics/Metrics';

// const Data = [
//   {
//     id: 0,
//     Order_no: 'Order №1947034',
//     Date: '05-12-2019',
//     tracking_number: 'IW3475453455',
//     quantity: 3,
//     total_amount: 112,
//   },
//   {
//     id: 0,
//     Order_no: 'Order №1947972',
//     Date: '03-11-2020',
//     tracking_number: 'IW3475553555',
//     quantity: 4,
//     total_amount: 110,
//   },
//   {
//     id: 0,
//     Order_no: 'Order №1947678',
//     Date: '08-08-2021',
//     tracking_number: 'IW3477457755',
//     quantity: 6,
//     total_amount: 118,
//   },
//   {
//     id: 0,
//     Order_no: 'Order №1947777',
//     Date: '07-07-2022',
//     tracking_number: 'IW3477777777',
//     quantity: 7,
//     total_amount: 150,
//   },
// ];

// const DataStructure = ({v}) => (
//   <TouchableOpacity>
//     <View style={Styles.orderDatamainBody}>
//       <View style={{marginTop: 6}}>
//         <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
//           <Text style={Styles.orderData1}>{v.Order_no}</Text>
//           <Text style={Styles.orderData2}>{v.Date}</Text>
//         </View>

//         <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
//           <Text style={Styles.orderData2}>Tracking number:</Text>
//           <Text style={Styles.orderData1}>{v.tracking_number}</Text>
//         </View>

//         <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={Styles.orderData2}>Quantity:</Text>
//             <Text style={Styles.orderData1}>{v.quantity}</Text>
//           </View>

//           <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
//             <Text style={Styles.orderData2}>Total Amount:</Text>
//             <Text style={Styles.orderData1}>{v.total_amount}$</Text>
//           </View>
//         </View>

//         <View style={Styles.detailBtnHead}>
//           <View style={Styles.detaildBtn}>
//             <TouchableOpacity>
//               <Text style={Styles.detaildBtnText}>Details</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={Styles.delieverdText}>Delievered</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// export default function My_Order() {
//   return (
//     <ScrollView>
//       <StatusBar backgroundColor="#F4F4F4" barStyle="dark-content" />
//       <View style={{width: '100%', height: 1000, backgroundColor: '#F4F4F4'}}>
//         <View style={Styles.mainIcon}>
//           <TouchableOpacity>
//             <EvilIcons name="chevron-left" size={45} color="#222222" />
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <EvilIcons name="search" size={35} color="#222222" />
//           </TouchableOpacity>
//         </View>

//         <Text style={Styles.myOrderText}>My orders</Text>

//         <View style={Styles.delievered}>
//           <TouchableOpacity>
//             <Text style={Styles.delieveredBtn}>Delivered</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={Styles.process}>Processing</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={Styles.process}>Cancelled</Text>
//           </TouchableOpacity>
//         </View>

//         <FlatList
//           data={Data}
//           renderItem={({item}) => <DataStructure v={item} />}
//           keyExtractor={item => item.id}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const Styles = StyleSheet.create({
//   mainIcon: {
//     width: horizontalScale(1000),
//     height: verticalScale(30),
//     // borderWidth: 1,
//     flexDirection: 'row',
//     // marginHorizontal: 16,
//     columnGap: 240,
//     marginTop: verticalScale(10),
//   },
//   myOrderText: {
//     // width:"90%",
//     // height:30,
//     // borderWidth:1,
//     marginHorizontal: horizontalScale(16),
//     marginTop: verticalScale(18),
//     fontFamily: 'Metropolis-Bold',
//     fontSize: moderateScale(34),
//     color: '#222222',
//   },
//   delievered: {
//     width: horizontalScale(90),
//     height: verticalScale(30),
//     flexDirection: 'row',
//     // borderWidth:1,
//     marginHorizontal: horizontalScale(16),
//     marginTop: verticalScale(15),
//     columnGap: 35,
//   },
//   delieveredBtn: {
//     width: horizontalScale(100),
//     height: verticalScale(30),
//     backgroundColor: '#222222',
//     borderRadius: moderateScale(50),
//     fontSize: moderateScale(14),
//     textAlign: 'center',
//     padding: horizontalScale(6),
//     padding: verticalScale(6),
//     color: '#FFFFFF',
//     fontFamily: 'Metropolis-Regular',
//   },
//   process: {
//     textAlign: 'center',
//     padding: horizontalScale(5),
//     padding: verticalScale(5),
//   },
//   orderDatamainBody: {
//    flex:1,
//     // borderWidth: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: moderateScale(8),
//     elevation: 5,
//     marginHorizontal: horizontalScale(18),
//     marginTop: verticalScale(30),
//     padding: horizontalScale(10),
//     padding: verticalScale(10),
//   },
//   orderData1: {
//     fontFamily: 'Metropolis-Bold',
//     color: '#222222',
//     lineHeight: 24,
//   },
//   orderData2: {
//     fontFamily: 'Metropolis-Regular',
//     color: '#9B9B9B',
//     lineHeight: 24,
//   },
//   detaildBtn: {
//     width: horizontalScale(100),
//     height: verticalScale(38),
//     borderWidth: 1,
//     borderRadius: moderateScale(50),
//   },
//   detaildBtnText: {
//     fontFamily: 'Metropolis-Regular',
//     color: '#222222',
//     textAlign: 'center',
//     padding: horizontalScale(8),
//     padding: verticalScale(8),
//   },
//   detailBtnHead: {
//     flexDirection: 'row',
//     justifyContent:'space-between',
//     columnGap: 128,
//     marginTop: verticalScale(30),
//   },
//   delieverdText: {
//     textAlign: 'center',
//     color: '#2AA952',
//     fontFamily: 'Metropolis-Regular',
//     marginTop: verticalScale(10),
//   },
// });

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  a,
  Image,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import { useDispatch } from 'react-redux';
import { SignoutUser } from '../Redux/Slice/auth.slice';

export default function My_profile( {route , navigation}) {
 const dispatch = useDispatch();
 
  const handleSignOut = () => {
    dispatch(SignoutUser())
    navigation.navigate("Signup")
  }
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={Styles.container}>
        {/* <View style={Styles.search}>
          <TouchableOpacity>
            <EvilIcons name="search" size={32} color="#222222" />
          </TouchableOpacity>
        </View>

        <Text style={Styles.myProfile}>My Profile</Text> */}

        <View style={Styles.profileHead}>
          <Image
            style={Styles.Profileimg}
            source={require('../../../assets/image/my_orders_girl_profile_img.png')}
          />

          <View style={Styles.matildabrownTextMAin}>
            <Text style={Styles.matildabrownText}>Matilda Brown</Text>
            <Text style={Styles.matildabrowngmailText}>
              matildabrown@mail.com
            </Text>
          </View>
        </View>

        <View style={Styles.datamain}>
          <View style={Styles.dataHead}>
            <TouchableOpacity onPress={() => navigation.navigate("My_Order")}>
              <Text style={Styles.data1}>My orders</Text>
              <Text style={Styles.data2}>Already have 12 orders</Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <TouchableOpacity onPress={() => navigation.navigate("shippingaddress")}>
              <Text style={Styles.data1}>Shipping addresses</Text>
              <Text style={Styles.data2}>3 ddresses</Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Payment methods</Text>
              <Text style={Styles.data2}>Visa **34</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Promocodes</Text>
              <Text style={Styles.data2}>You have special promocodes</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <TouchableOpacity onPress={() => navigation.navigate("rating")}>
              <Text style={Styles.data1}>My reviews</Text>
              <Text style={Styles.data2}>Reviews for 4 items</Text>
            </TouchableOpacity >

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>

            <TouchableOpacity onPress={() => handleSignOut()}>
              <Text style={Styles.data1}>Sign Out</Text>
              <Text style={Styles.data2}>Notifications, password</Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(15),

  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: verticalScale(40),
  },
  myProfile: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(34),
    color: '#222222',
  },
  Profileimg: {
    width: horizontalScale(100),
    height: verticalScale(100),
    borderWidth: 1,
    borderRadius: moderateScale(50),
  },
  profileHead: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
  },
  matildabrownTextMAin: {
    padding: horizontalScale(16),
    padding: verticalScale(16),
  },
  matildabrownText: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(22),
    color: '#222222',
  },
  matildabrowngmailText: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(14),
    color: '#9B9B9B',
  },
  dataHead: {
    paddingVertical:verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   elevation: 0.2,
  },
  data1: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(20),
    lineHeight: 40,
    color: '#222222',
    marginTop: verticalScale(5),
  },
  data2: {
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(13),
    color: '#9B9B9B',
  },
  datamain: {
    fontFamily: 'Metropolis-Regular',
    marginTop: verticalScale(25),
  },
});


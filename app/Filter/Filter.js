import { View, StatusBar, ScrollView, Text, StyleSheet, TouchableOpacity , document} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/Metrics';
import { RangeSlider } from '@react-native-assets/slider';
import CheckBox from 'react-native-check-box'
import { useEffect, useState } from 'react';



export default function Filter() {
    const [min, setmin] = useState(0);
    const [max, setmax] = useState(200);
     const [price, setprice] = useState(78)

     const [pressbutton, setpressbutton] = useState("white");

     const changecolor = color => {
      setpressbutton(color)
     }

     useEffect(()=> {
        document.style.backgroundColor= pressbutton
     } , [pressbutton])
   
    return (
        <View style={style.mainContainer}>
            <View style={style.bodyContainer}>
                <ScrollView >
                    <StatusBar
                        barStyle="dark-content"
                        translucent backgroundColor='white'
                    />


                    <View style={style.titlebar}>
                        <MaterialIcons name='chevron-left' size={30} color='black'></MaterialIcons>
                        <Text style={style.filtertext}>Filters</Text>
                    </View>


                    <Text style={style.text}>Price range</Text>

                    <View style={style.viewstyle}>
                        <RangeSlider style={style.Slider}
                            // step={1}
                            // minimumValue={min}
                            // maximumValue={max}
                            // value={distance}
                            // onValueChange={val => setdistance(val)}
                            // thumbTintColor='rgb(252, 228, 149)'
                            // maximumTrackTintColor='#d3d3d3'
                            // minimumTrackTintColor='rgb(252, 228, 149)'

                            step={1}
                            range={[78, 143]}
                            minimumValue={min}
                            maximumValue={max}
                            inboundColor='#DB3022'
                            thumbTintColor='#DB3022'
                            inverted={false}
                            enabled={true}
                            trackHeight={5}
                            allowOverlap={false}
                            thumbSize={25}
                             value = {price}
                             onValueChange={val => setprice(val)}
                             

                        />
                        <View style={style.textCon}>
                            <Text style={style.colorYellow}>
                                {price  + '$'}
                            </Text>
                        </View>

                    </View>

                    <Text style={style.text}>Colors</Text>
                    <View style={style.circleview}>
                        <TouchableOpacity style={style.circle1}></TouchableOpacity>
                        <TouchableOpacity style={style.circle2}></TouchableOpacity>
                        <TouchableOpacity style={style.circle3}></TouchableOpacity>
                        <TouchableOpacity style={style.circle4}></TouchableOpacity>
                        <TouchableOpacity style={style.circle5}></TouchableOpacity>
                        <TouchableOpacity style={style.circle6}></TouchableOpacity>
                    </View>

                    <Text style={style.text}>Sizes</Text>
                    <View style={style.sizeview}>
                        <TouchableOpacity style={style.size1}><Text style={style.sizetext}>XS</Text></TouchableOpacity>
                        <TouchableOpacity style={style.size1}><Text style={style.sizetext}>S</Text></TouchableOpacity>
                        <TouchableOpacity style={style.size1}><Text style={style.sizetext}>M</Text></TouchableOpacity>
                        <TouchableOpacity style={style.size1}><Text style={style.sizetext}>L</Text></TouchableOpacity>
                        <TouchableOpacity style={style.size1}><Text style={style.sizetext}>XL</Text></TouchableOpacity>
                    </View>

                    <Text style={style.text}>Category</Text>
                    <View style={style.categoryview}>
                        <TouchableOpacity style={style.category1}><Text style={style.categorytext} >All</Text></TouchableOpacity>
                        <TouchableOpacity style={style.category2} onPress= {() => changecolor("red")}><Text style={style.categorytext} >Women</Text></TouchableOpacity>
                        <TouchableOpacity style={style.category2}><Text style={style.categorytext}>Men</Text></TouchableOpacity>
                        <TouchableOpacity style={style.category2}><Text style={style.categorytext}>Boys</Text></TouchableOpacity>
                        <TouchableOpacity style={style.category2}><Text style={style.categorytext}>Girls</Text></TouchableOpacity>
                    </View>

                    <View>
                        <View style={style.brandview}>
                            <View>
                                <Text style={style.text}>Brand</Text>
                                <Text style={{ paddingLeft: 16, fontFamily: 'Metropolis-Regular', fontSize: 11 }}>addidas,Originals,Jack & Jones , s.Oliver</Text>
                            </View>

                            <MaterialIcons name='keyboard-arrow-right' size={30} style={style.righticon}></MaterialIcons>



                        </View>

                        <View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>addidas</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>addidas Original</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Blend</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Boutique Moschino</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Champion</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Diesel</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Jack & Jones</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Naf Naf</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Red Valentino</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>s.Oliver</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                        </View>

                    </View>
                </ScrollView>



            </View>

            <View style={style.applayview}>
                <View style={style.buttonview}>
                    <TouchableOpacity style={style.discardbutton}><Text style={style.buttontext1}>Discard</Text></TouchableOpacity>
                    <TouchableOpacity style={style.applybutton} ><Text style={style.buttontext2}>Apply</Text></TouchableOpacity>
                </View>

            </View>

        </View>

    )
}


const style = StyleSheet.create({

    container: {
        paddingTop: 30,

    },



    titlebar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: horizontalScale(16),
        paddingTop: verticalScale(15),
        backgroundColor: 'white'

    },

    filtertext: {
        // marginLeft: horizontalScale(120),
        fontSize: moderateScale(18),
        fontFamily: 'Metropolis-Black',
        color: 'black',
        marginHorizontal: 'auto'
    },

    text: {
        fontSize: moderateScale(16),
        fontFamily: 'Metropolis-Black',
        color: 'black',
        marginTop: verticalScale(10),
        paddingLeft: horizontalScale(16),
    },

    viewstyle: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),

    },

    Slider: {
        width: '94%',
        backgroundColor: 'white',

    },

    circleview: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),
        paddingRight: horizontalScale(16),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },


    circle1: {

        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: 'black'
    },
    circle2: {

        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#F6F6F6'
    },
    circle3: {

        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#B82222'
    },
    circle4: {

        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#BEA9A9'
    },
    circle5: {

        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#E2BB8D'
    },

    circle6: {

        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#151867'
    },

    sizeview: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),
        paddingRight: horizontalScale(16),
        flexDirection: 'row',
    },

    size1: {
        width: horizontalScale(40),
        height: verticalScale(40),
        borderRadius: 9,
        marginRight: verticalScale(20),
        // backgroundColor: 'red',
        borderWidth: 0.5,
        borderColor: 'black',
    },



    sizetext: {
        textAlign: 'center',
        paddingTop: verticalScale(10),
        color: 'black',

    },


    categoryview: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),
        paddingRight: horizontalScale(16),
        flexDirection: 'row',
        flexWrap: 'wrap',

    },


    category1: {
        width: horizontalScale(100),
        height: verticalScale(40),
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 8,
        marginRight: horizontalScale(10),
        marginBottom: verticalScale(9),
        backgroundColor: '#DB3022'
    },

    category2: {
        width: horizontalScale(100),
        height: verticalScale(40),
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 8,
        marginRight: horizontalScale(10),
        
    },

    categorytext: {
        color: 'black',
        textAlign: 'center',
        paddingTop: verticalScale(9),
        fontFamily: 'Metropolis-Regular'
    },

    brandview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    righticon: {
        marginRight: horizontalScale(10),
        color: 'black',
    },

    SearchBar: {
        width: horizontalScale('90%'),
        paddingLeft: horizontalScale(16),
        marginTop: verticalScale(20),

    },

    brandname: {
        paddingLeft: horizontalScale(16),
        color: 'black',
        fontSize: moderateScale(16),
        fontFamily: 'Metropolis-Regular'
    },

    brandfilter: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    CheckBox: {
        marginRight: horizontalScale(16),
    },

    applayview: {
        width: '100%',
        flex: 1.5,
        backgroundColor: 'white',
        marginTop: verticalScale(15)

    },

    mainContainer: {
        flex: 1,
        flexDirection: 'column'
    },

    bodyContainer: {
        flex: 10
    },

    discardbutton: {
        width: horizontalScale(160),
        borderWidth: 1,
        borderColor: 'black',
        height: verticalScale(40),
        borderRadius: 20,
        paddingTop: verticalScale(8)

    },

    applybutton: {
        width: horizontalScale(160),
        height: verticalScale(40),
        backgroundColor: '#DB3022',
        borderRadius: 20,
        paddingTop: verticalScale(8)

    },

    buttonview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: verticalScale(25)
    },

    buttontext1: {
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular',
        color: 'black'

    },
    buttontext2: {
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular',
        color: 'white'
    },

    colorYellow: {
        color: 'black',
        fontSize : 20,
        

    }


})






// import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
// import React from 'react'
//
// export default function filter() {
//   return (
//     <View style={styles.mainContainer}>
//     <View style={styles.bodyContainer}>
//       <ScrollView >
//         <View style={{ height: 250, backgroundColor: 'red' }}>
//         </View>
//         <View style={{ height: 250, backgroundColor: 'blue' }}>
//         </View>
//         <View style={{ height: 250, backgroundColor: 'green' }}>
//         </View>
//       </ScrollView>
//     </View>
//     <View style={styles.headerContainer}>
//       <Button style={{ backgroundColor: 'blue', alignSelf:'center' }}
//         title="THIS IS A BUTTON" />
//     </View>
//   </View>
//   )
// }
//
// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         flexDirection: 'column'
//       },
//        headerContainer: {
//         flex: 1,
//       },
//       bodyContainer: {
//         flex: 10
//       }
// })
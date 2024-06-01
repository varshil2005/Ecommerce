import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/Metrics'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Data = [
    {
        id: 1,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/imges2.webp'),
        price: 20,
        disscount: 10

    },
    {
        id: 2,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/imges2.webp'),
        price: 20,
        disscount: 10

    },
    {
        id: 3,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/imges2.webp'),
        price: 20,
        disscount: 10

    },
    {
        id: 4,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/imges2.webp'),
        price: 20,
        disscount: 10

    }
]

const newData = [
    {
        id: 1,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/newproduct.jpg'),
        price: 20,
        disscount: 10

    },
    {
        id: 2,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/newproduct.jpg'),
        price: 20,
        disscount: 10

    },
    {
        id: 3,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/newproduct.jpg'),
        price: 20,
        disscount: 10

    },
    {
        id: 4,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/newproduct.jpg'),
        price: 20,
        disscount: 10

    }
]



export default function Homepage() {

    const ProductCart = ({ v }) => (
        <View >
            <View style={{ marginHorizontal: horizontalScale(14) }}>
                <Image source={v.image} style={style.product}></Image>
                <View style={style.rating}>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                </View>
                <Text style={{ fontSize: 11 }}>{v.title}</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>{v.subtitle}</Text>
                <View style={style.priceview}>
                    <Text style={style.pricetext}>{v.price}$</Text>
                    <Text style={style.disscounttext}>{v.disscount}$</Text>
                </View>

            </View>
        </View>
    )


    return (
        <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <StatusBar
                barStyle="dark-content"
                translucent backgroundColor='transparent'
            />

            <ImageBackground
                style={style.backgroundimage}
                source={require('../../assets/image/pexels-godisable-jacob-226636-896293.jpg')}>
            </ImageBackground>

            <View style={{ width: '70%' }}>
                <Text style={style.title}>Fashion Sale</Text>

                <TouchableOpacity style={style.checkbutton}>
                    <Text style={style.checktext}>Check</Text>
                </TouchableOpacity>

            </View>

            <View>
                <View style={style.saleview}>
                    <View>
                        <Text style={style.saletext}>Sale</Text>
                        <Text style={{ fontSize: 11, fontFamily: 'Metropolis-Regular' }}>Super summer sale</Text>
                    </View>

                    <Text style={style.viewalltext}>View All</Text>
                </View>


                <FlatList

                    data={Data}
                    renderItem={({ item }) => <ProductCart v={item} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

            </View>

            <View>
                <View style={style.saleview}>
                    <View>
                        <Text style={style.saletext}>New</Text>
                        <Text style={{ fontSize: 11, fontFamily: 'Metropolis-Regular' }}>You've never seen it before!</Text>
                    </View>

                    <Text style={style.viewalltext}>View All</Text>
                </View>


                <FlatList

                    data={newData}
                    renderItem={({ item }) => <ProductCart v={item} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

            </View>

            <View>           
             <View>
                <ImageBackground source={require('../../assets/image/newcollection.png')} style={style.backgroundimage2}></ImageBackground>

                <View>
                    <Text style={style.collectiontext}>New Collection</Text>
                </View>


            </View>

            <View>
                <View>
                    <ImageBackground source={require('../../assets/image/summersale.png')} style={style.summerimage}></ImageBackground>
                    <View>
                        <Text style={style.summertext}>Summer Sale</Text>
                    </View>
                    <View style= {style.summerimage}>
                        <ImageBackground source={require('../../assets/image/Blackimage.png')} style = {style.blackImage}></ImageBackground>
                        <View>
                            <Text style = {style.blackImage}>Black</Text>
                        </View>
                    </View>
                </View>   
            </View>
            </View>


        </ScrollView>
    )
}


const style = StyleSheet.create({

    container: {
        marginHorizontal: horizontalScale(16)
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
        marginBottom: 5
    },

    rating: {
        flexDirection: 'row',
        color: '#FFBA49',
        marginBottom: 8
    },

    backgroundimage: {
        width: '100%',
        height: verticalScale(550),
        position: 'relative'
    },

    title: {
        position: 'absolute',
        bottom: moderateScale(130),
        marginHorizontal: horizontalScale(15),
        color: 'white',
        fontSize: moderateScale(48),
        fontFamily: 'Metropolis-Black'
    },

    checkbutton: {
        position: 'absolute',
        bottom: moderateScale(75),
        backgroundColor: '#DB3022',
        marginHorizontal: horizontalScale(15),
        width: '60%',
        paddingVertical: verticalScale(12),
        borderRadius: moderateScale(20)
    },

    checktext: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular'
    },

    saleview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(15),
        marginVertical: verticalScale(20),
        alignItems: 'center'
    },

    saletext: {
        fontSize: 34,
        fontFamily: 'Metropolis-Black',
        color: 'black'
    },

    viewalltext: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 13,
        color: 'black'
    },

    priceview: {
        flexDirection: 'row'
    },

    pricetext: {
        textDecorationLine: 'line-through',
        fontFamily: 'Metropolis-Regular'
    },

    disscounttext: {
        marginLeft: 9,
        color: 'red',
        fontFamily: 'Metropolis-Regular',
        marginBottom : verticalScale(40)
    },

    backgroundimage2: {
        height: verticalScale(400),
        position: 'relative'
    },

    collectiontext: {
        position: 'absolute',
        color: 'white',
        fontSize: moderateScale(30),
        fontFamily: 'Metropolis-Black',
        bottom: moderateScale(70),
        right : horizontalScale(20)

    },

    summerimage : {
        width : 187,
        height: 186,
        position : 'relative'
        
    },

    summertext : {
        width : '50%',
        position : 'absolute',
        color : 'red',
        bottom : verticalScale(60),
        fontSize : moderateScale(32),
        fontFamily : 'Metropolis-Black',
        left : moderateScale(25)
    },

    blackImage : {
        width : '100%',
        height :  250,
        position : 'relative'
    },

    blacktext : {
        position : 'absolute',
        color :'white',
        bottom : 50,
        fontSize : 50
    }


})
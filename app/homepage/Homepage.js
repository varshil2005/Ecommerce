import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/Metrics'

const Data = [
    {
        id: 1,
        title: 'Dorothy Perkins',
        subtitle: 'Evening  Dress',
        image: require('../../assets/image/pic1.png'),
        price: 20,
        disscount: 10

    },
    {
        id: 2,
        title:'Dorothy Perkins',
        subtitle:'Evening  Dress',
        image: require('../../assets/image/pic1.png'),
        price: 20,
        disscount: 10

    },
    {
        id: 3,
        title:'Dorothy Perkins',
        subtitle:'Evening  Dress',
        image: require('../../assets/image/pic1.png'),
        price: 20,
        disscount: 10

    },
    {
        id: 4,
        title:'Dorothy Perkins',
        subtitle:'Evening  Dress',
        image: require('../../assets/image/pic1.png'),
        price: 20,
        disscount: 10

    }
]



export default function Homepage() {

    const ProductCart = ({v}) => (
        <View style={{ marginHorizontal: horizontalScale(10)}}>
        <View>
            <Image source={v.image} style={style.product}></Image>
            <Text style={{ fontSize: 11 , marginHorizontal : horizontalScale(10)}}>{v.title}</Text>
            <Text style={{ fontSize: 16, color: 'black' , marginHorizontal : horizontalScale(10)}}>{v.subtitle}</Text>
            <Text style={{marginHorizontal : horizontalScale(10)}}>{v.disscount}</Text>
        </View>
        </View>
    )


    return (
        <ScrollView>
            <StatusBar

                barStyle="dark-content"
                translucent backgroundColor='transparent'

            />

            <ImageBackground
                style={{ width: '100%', height: verticalScale(550), position: 'relative' }}
                source={require('../../assets/image/pexels-godisable-jacob-226636-896293.jpg')}

            >

            </ImageBackground>

            <View
                style={{ width: '70%' }}
            >
                <Text
                    style={{
                        position: 'absolute',
                        bottom: moderateScale(130),
                        marginHorizontal: horizontalScale(15),
                        color: 'white',
                        fontSize: moderateScale(48),
                        fontFamily: 'Metropolis-Black'
                    }}

                >Fashion Sale</Text>

                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: moderateScale(75),
                        backgroundColor: '#DB3022',
                        marginHorizontal: horizontalScale(15),
                        width: '60%',
                        paddingVertical: verticalScale(12),
                        borderRadius: moderateScale(20)
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Metropolis-Regular' }}>Check</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: horizontalScale(15),
                        marginVertical: verticalScale(20),
                        alignItems: 'center'

                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 34,
                                fontFamily: 'Metropolis-Black',
                                color: 'black'
                            }}
                        >Sale</Text>
                        <Text style={{ fontSize: 11, fontFamily: 'Metropolis-Regular' }}>Super summer sale</Text>
                    </View>

                    <Text
                        style={{
                            fontFamily: 'Metropolis-Regular',
                            fontSize: 13,
                            color: 'black'
                        }}
                    >View All</Text>
                </View>

                
                    <FlatList

                        data={Data}
                        renderItem={({ item }) => <ProductCart v={item} />}
                        keyExtractor ={item => item.id}
                        horizontal={true}
                    />
              
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({

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
    }
})
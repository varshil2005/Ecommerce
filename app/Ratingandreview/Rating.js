import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from 'rn-range-slider/styles';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import LabelContainer from 'rn-range-slider/LabelContainer';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/Metrics';

export default function Rating() {
  return (
    <ScrollView style ={style.container}>
       

         <View>
         <StatusBar
                barStyle="dark-content"
                translucent backgroundColor='transparent'
         />
            <MaterialIcons name='chevron-left' size={30} color='black'></MaterialIcons>
            <Text style = {style.headingtext}>Rating&Reviews</Text>
         </View>

         <View style = {style.ratingview}>
            <View>
            <Text style = {style.ratingtext}>4.3</Text>
            <Text style = {{fontSize : 14 ,  fontFamily : 'Metropolis-Regular',}}>23 ratings</Text>
            </View>

            <View>
                <View style = {style.ratingicons}>
                <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                </View>

                <View style = {style.ratingicons}>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                </View>

                <View style = {style.ratingicons}>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>

                </View>

                <View style = {style.ratingicons}>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                </View>

                <View style = {style.ratingicons}>
                    <MaterialIcons name="star-rate" size={20} color='#FFBA49'></MaterialIcons>
                </View>
            </View>
           
         </View>

    </ScrollView>
  )
}   


const style = StyleSheet.create({
    container : {
        marginTop : verticalScale(40),
        marginLeft : horizontalScale(16)
    },

    headingtext : {
        color : 'black',
        fontFamily : 'Metropolis-Black',
        fontSize: moderateScale(34),
        marginTop : verticalScale(15)
    },

    ratingview : {
        marginTop : verticalScale(30),
        flexDirection : 'row'
    },

    ratingtext : {
        fontSize : 44,
        color : 'black',
        fontFamily : 'Metropolis-Black',
    },

    ratingicons : {
        flexDirection : 'row',
        justifyContent : 'flex-end'
    }
})
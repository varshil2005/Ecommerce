import { View, Text, TextInput, StatusBar, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

export default function SignUp() {
    return (
        <View style = {style.container}>
            <StatusBar 
            backgroundColor='white'
            barStyle="dark-content" 
            
            />   
            <Text><MaterialIcons name= "chevron-left" size={45} color = 'black'></MaterialIcons></Text>  
            <Text style = {{
                fontSize : 34,
                fontFamily: 'Metropolis-Black',
                color : 'black',
                marginTop: 20
            }}>Sign up</Text>

        <View style = {{marginTop :50 , marginBottom : 100}}>
            <TextInput style = {style.textinput} placeholder='Name'></TextInput>
            <TextInput style = {style.textinput} placeholder='Email'></TextInput>
            <TextInput style = {style.textinput} placeholder='Password'></TextInput>
            <View style = {{flexDirection : 'row', alignItems : 'center' , justifyContent : 'flex-end'}}>
                <Text style = {{color : 'black'}}>Already have an account?</Text>
                <Text style = {{marginLeft : 10}}><MaterialIcons name= 'arrow-right-alt' color= 'red' size = {20}></MaterialIcons></Text>
            </View>
            <TouchableOpacity style= {style.button}><Text style = {{color : 'white', fontFamily: 'Metropolis-Regular'}}>SIGN UP</Text></TouchableOpacity>
        </View>
            <Text style = {{textAlign : 'center'}}>Or sign up with social account</Text>
            <View>
                <Text style= {style.linkbutton}><Foundation name='social-facebook' size={30} color='#3B5998'></Foundation></Text>
                
            </View>

            
        </View>
    )
}


const style  = StyleSheet.create({
    container : {
        marginHorizontal : 20,

    },

    textinput : {
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        }, 
        elevation: 1.5,
        paddingVertical : 22,
        backgroundColor : 'white',
        marginBottom : 15

    },

    button : {
        width:'100%',
        backgroundColor : 'red',
        marginTop :25,
        paddingVertical : 15,
        borderRadius : 25,
        alignItems : 'center',
        
    },

    linkbutton : {
        width : 65,
        backgroundColor : 'white',
        alignSelf : 'center',
        marginTop : 20,
        paddingVertical : 10,
        borderRadius : 15,

    }
})

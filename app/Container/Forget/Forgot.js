import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale } from '../../../assets/metrics/Metrics';
export default function Forgot() {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <FontAwesome name="angle-left" size={45} color="black" />
            <Text style={styles.fonts}>Forgot Password</Text>
            <Text style={styles.text}>Please,enter email address.You will receive a link to create a new password via email</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'

                />

            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: moderateScale(17), color: 'white' }}>SEND</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(18),
        backgroundColor: '#F9F9F9',
        paddingTop: horizontalScale(13)
    },
    fonts: {
        color: 'black',
        fontSize: moderateScale(40),
        fontFamily: 'Metropolis-Bold',
        marginBottom: horizontalScale(13),
        marginTop: horizontalScale(13)
    },
    input: {
        height: 60,
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 10,
        fontSize: 14,
        fontWeight: '500',
        elevation: 2
    },
    button: {
        width: 350,
        height: 55,
        backgroundColor: '#DB3022',
        color: 'white',
        borderRadius: 50,
        alignItems: 'center',
        elevation: 2,
        marginTop: 40,
        justifyContent:'center'
    },

    text: {
        color: 'black',
        paddingTop: 40,
        paddingBottom: 15,
        lineHeight: 20
    },


})
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/metrics/Metrics'
import { useFormik } from 'formik';
import { number, object } from 'yup';
import { TouchableOpacity } from 'react-native';
import { disableNetwork } from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';

export default function LoginwithOtp() {

    let userSchema = object({
        Mobileno: number().required(),
        Otp: number().required(),
    });

    let formik = useFormik
        ({
            initialValues: {
                Mobileno: '',
                Otp: '',
            },

            validationSchema: userSchema,
            onSubmit: (values, { resetForm }) => {
                console.log('welcome');
                console.log('dsdd', values);
                //   hanldesave(values)
                handleLogin(values)

            },
        });
    const {
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        values,
        touched,
        setValues,
    } = formik;

    const dispatch = useDispatch();

    const handleLogin = (values) => {
        console.log("vvvvvvvvvvvvvvvvv");
        dispatch(values.Mobileno)
    }
    return (
        <View>
            <StatusBar animated={true} backgroundColor="#61dafb" />
            <Text style={styles.fonts}>Login With OTP</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile no"
                    autoCapitalize="none"
                    placeholderTextColor="#9B9B9B"
                    onChangeText={handleChange('Mobileno')}
                    value={values.Mobileno}
                    onBlur={handleBlur('Mobileno')}
                />
                <Text style={{ color: 'red' }}>
                    {errors.Mobileno && touched.Mobileno ? errors.Mobileno : ''}
                </Text>
                <View style= {{flexDirection : 'row'}}>
                <TextInput
                    style={styles.input2}
                    placeholder="Otp"
                    autoCapitalize="none"
                    placeholderTextColor="#9B9B9B"
                    onChangeText={handleChange('Otp')}
                    value={values.password}
                    onBlur={handleBlur('Otp')}
                   
                />
                <TouchableOpacity style={styles.otpbutton}  ><Text style= {{color : 'white'}}>Send Otp</Text></TouchableOpacity>
                </View>
                <Text style={{ color: 'red' }}>
                    {errors.Otp && touched.Otp ? errors.Otp : ''}
                </Text>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{ fontSize: moderateScale(17), color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(18),
        backgroundColor: '#F9F9F9',
        paddingTop: horizontalScale(14),
    },
    fonts: {
        color: 'black',
        fontSize: moderateScale(35),
        fontFamily: 'Metropolis-Bold',
        marginBottom: horizontalScale(40),
        marginTop: horizontalScale(20),
        textAlign: 'center'
    },
    input: {
        // width: 350,
   
        height: horizontalScale(60),
        backgroundColor: '#FFFFFF',
        margin: horizontalScale(10),
        padding: horizontalScale(8),
        color: 'Black',
        borderRadius: moderateScale(10),
        fontSize: moderateScale(14),
        fontWeight: '500',
        elevation: 2,
    },
    input2: {
        // width: 350,
        width : "70%",
        height: horizontalScale(60),
        backgroundColor: '#FFFFFF',
        margin: horizontalScale(10),
        padding: horizontalScale(8),
        color: 'Black',
        borderRadius: moderateScale(10),
        fontSize: moderateScale(14),
        fontWeight: '500',
        elevation: 2,
    },
    button: {
        // width: 350,
        height: verticalScale(55),
        backgroundColor: '#DB3022',
        color: 'white',
        borderRadius: moderateScale(50),
        alignItems: 'center',
        elevation: 2,
        justifyContent: 'center',
    },
    icon: {
        // display: 'flex',
        flexDirection: 'row',
        padding: horizontalScale(10),
        // alignItems: 'center',
        justifyContent: 'center',
        columnGap: horizontalScale(20),
        marginTop: horizontalScale(30),
    },
    text: {
        color: 'black',
    },
    otpbutton : {
       width : "22%",
       height: verticalScale(45),
       backgroundColor: '#DB3022',
       borderRadius: moderateScale(14),
       alignItems: 'center',
       elevation: 2,
       justifyContent: 'center',
       marginTop : 18
    }
})
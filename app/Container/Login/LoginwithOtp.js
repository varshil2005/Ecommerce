import { View, Text, StyleSheet, StatusBar, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/metrics/Metrics'
import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import { TouchableOpacity } from 'react-native';
import { disableNetwork } from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { LoginPhone, VerifyOtp } from '../Redux/Slice/auth.slice';

export default function LoginwithOtp() {

    const [code, setCode] = useState('');

    let userSchema = object({
        Mobileno: string().required(),
        Otp: string().required()
    });


    let formik = useFormik
        ({
            initialValues: {
                Mobileno: '',
            },

            validationSchema: userSchema,
            onSubmit: (values,{resetForm}) => {
                console.log('asjhcdbahsjda');
                console.log('shdhuaushvasfdavs', values);

                dispatch(LoginPhone({phoneNo : values.Mobileno}))
                resetForm()
            },
        });

        
    let userSchema2 = object({
        Otp: string().required()
    });

    let formik2 = useFormik
        ({
            initialValues: {
                Otp: '',
            },

            validationSchema: userSchema2,
            onSubmit: (values,{resetForm}) => {
                console.log('asjhcdbahsjda');
                console.log('shdhuaushvasfdavs', values);

                dispatch(VerifyOtp({confirm : auth.confirmation ,  code : code}))
                resetForm()
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

    const {
        handleBlur2,
        handleChange2,
        handleSubmit2,
        errors2,
        values2,
        touched2,
        setValues2,
    } = formik2;

    const dispatch = useDispatch();

    
    const auth = useSelector(state =>state.auth);
    console.log("uuuuuuuuuuuuuuuu",auth);



   if (!auth.confirmation) {
    return (
        <View>
            <StatusBar animated={true} backgroundColor="#61dafb" />
            <Text style={styles.fonts}>Login With OTP</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile no"
                    placeholderTextColor="#9B9B9B"
                    onChangeText={handleChange('Mobileno')}
                    value={values.Mobileno}
                    onBlur={handleBlur('Mobileno')}
                />
             
            </View>
            <Text>{errors.Mobileno && touched.Mobileno ? errors.Mobileno : ''}</Text>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{ fontSize: moderateScale(17), color: 'white' }}>Login</Text>
                </TouchableOpacity>


        </View>
    )
   }

   return (
    // <>
    //   <TextInput value={code} onChangeText={text => setCode(text)} />
    //   <Button title="Confirm Code" onPress={handleSubmit} />
    // </>

    <View>

    <View>
        <TextInput
            style={styles.input}
            placeholder="Otp"
            placeholderTextColor="#9B9B9B"
            onChangeText={text => setCode(text)}
            value={values2.Otp}
            onBlur={handleBlur2('Otp')}
        />
     
     <Text>{errors.Otp && touched.Otp ? errors.Otp : ''}</Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={handleSubmit2}>
            <Text style={{ fontSize: moderateScale(17), color: 'white' }}>Confirm Code</Text>
        </TouchableOpacity>


</View>
  );
   
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
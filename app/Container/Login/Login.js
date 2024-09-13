import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { facebboklogin, googleLogin, LoginwithEmail, SigninWithGoogle } from '../Redux/Slice/auth.slice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Login({ route, navigation }) {
  GoogleSignin.configure({
    webClientId: '40650919837-p8m0ii3pm5rl8dkbrmfpts685i0pfif7.apps.googleusercontent.com',
  });

  let userSchema = object({
    email: string().email().required(),
    password: string().required(),
  });
  const dispatch = useDispatch()



  const UserData = useSelector(state => state.auth);
  console.log("UserDataUserDataUserDatav", UserData);


  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: userSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('welcome');
      console.log('dsdd', values);
      //   hanldesave(values)
      dispatch(LoginwithEmail(values));

      if (UserData.auth.emailVerified === true) {
        navigation.navigate("Home")
      } else {
        console.log("email is Not verified");

      }

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

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  }
  const handleFacebook = () => {
    dispatch(facebboklogin())
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text style={styles.fonts}>Login</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChange('email')}
          value={values.email}
          onBlur={handleBlur('email')}
        />
        <Text style={{ color: 'red' }}>
          {errors.email && touched.email ? errors.email : ''}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChange('password')}
          value={values.password}
          onBlur={handleBlur('password')}
        />
        <Text style={{ color: 'red' }}>
          {errors.password && touched.password ? errors.password : ''}
        </Text>
      </View>
      <View style={styles.arow}>
        <Text style={styles.text}>Forgot your passeord? </Text>
        <FontAwesome name="long-arrow-right" size={17} color="red" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ fontSize: moderateScale(17), color: 'white' }}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.textcenter}>Or sign up with social account</Text>
      <View style={styles.icon}>
        <TouchableOpacity style={styles.webicon}
          onPress={() => handleGoogleLogin()}
        >
          <FontAwesome name="google" size={28} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.webicon} onPress={() => handleFacebook()}>
          <FontAwesome name="facebook-square" size={28} color="blue" />
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.Login} onPress={() => navigation.navigate('LoginwithOtp')}>
        <Text style={styles.textcenter1}>Login With OTP</Text>
        <FontAwesome name="long-arrow-right" size={17} color="red" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(18),
    backgroundColor: '#F9F9F9',
    paddingTop: horizontalScale(13),
  },
  fonts: {
    color: 'black',
    fontSize: moderateScale(40),
    fontFamily: 'Metropolis-Bold',
    marginBottom: horizontalScale(40),
    marginTop: horizontalScale(20),
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
  arow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: horizontalScale(10),
    alignItems: 'center',
    paddingBottom: horizontalScale(29),
  },
  textcenter: {
    color: 'black',
    marginTop: horizontalScale(80),
    textAlign: 'center',
  },
  textcenter1: {
    color: 'black',
    // marginTop: horizontalScale(30),
    textAlign: 'center',
    marginRight: 5
  },
  webicon: {
    backgroundColor: '#FFFFFF',
    width: horizontalScale(85),
    height: verticalScale(75),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(17),
    //  shadowColor: 'rgba(0,0,0, .4)', // IOS
    elevation: 2, // Android
  },
  Login: {
    flexDirection: 'row',
    padding: horizontalScale(15),
    alignItems: 'center',
    paddingBottom: horizontalScale(29),
    justifyContent: 'center'
  }
});

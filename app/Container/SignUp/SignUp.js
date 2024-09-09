import {
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {object, string} from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {
  LoginwithEmail,
  SigninwithGoOgle,
  SignupwithEmail,
} from '../Redux/Slice/auth.slice';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';


export default function SignUp({route, navigation}) {
  let userSchema = object({
    name: string()
      .required('Please enter name')
      .matches(/^[a-zA-Z ]+$/, 'Please enter valid name'),
    email: string().email().required(),
    password: string().required(),
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: userSchema,
    onSubmit: (values, {resetForm}) => {
      console.log('welcome');
      console.log('dsdd', values);
      //   hanldesave(values)
      dispatch(SignupwithEmail(values));

      // resetForm();
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



  return (
    <View style={style.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Text
        style={{
          fontSize: 34,
          fontFamily: 'Metropolis-Black',
          color: 'black',
          marginTop: 20,
        }}>
        Sign up
      </Text>

      <View style={{marginTop: 50, marginBottom: 100}}>
        <TextInput
          style={style.textinput}
          placeholder="Name"
          onChangeText={handleChange('name')}
          value={values.name}
          onBlur={handleBlur('name')}></TextInput>

        <Text style={{color: 'red'}}>
          {errors.name && touched.name ? errors.name : ''}
        </Text>

        <TextInput
          style={style.textinput}
          placeholder="Email"
          onChangeText={handleChange('email')}
          value={values.email}
          onBlur={handleBlur('email')}></TextInput>

        <Text style={{color: 'red'}}>
          {errors.email && touched.email ? errors.email : ''}
        </Text>

        <TextInput
          style={style.textinput}
          placeholder="Password"
          onChangeText={handleChange('password')}
          value={values.password}
          onBlur={handleBlur('password')}></TextInput>

        <Text style={{color: 'red'}}>
          {errors.password && touched.password ? errors.password : ''}
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'black'}}>Already have an account?</Text>
          <Text style={{marginLeft: 10}}>
            <MaterialIcons
              name="arrow-right-alt"
              color="red"
              size={20}></MaterialIcons>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={handleSubmit}>
          <Text style={{color: 'white', fontFamily: 'Metropolis-Regular'}}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={style.textcenter}>Or sign up with social account</Text>
      <View style={style.icon}>
        <TouchableOpacity
          style={style.webicon}
          >
          <FontAwesome name="google" size={28} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={style.webicon}>
          <FontAwesome name="facebook-square" size={28} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  textinput: {
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1.5,
    paddingVertical: 22,
    backgroundColor: 'white',
    marginBottom: 15,
  },

  button: {
    width: '100%',
    backgroundColor: 'red',
    marginTop: 25,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },

  linkbutton: {
    width: 65,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  icon: {
    // display: 'flex',
    flexDirection: 'row',
    padding: horizontalScale(10),
    // alignItems: 'center',
    justifyContent: 'center',
    columnGap: horizontalScale(20),
    marginTop: horizontalScale(10),
  },
  textcenter: {
    color: 'black',
    textAlign: 'center',
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
});

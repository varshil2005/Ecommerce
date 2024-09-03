import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import {useFormik, validateYupSchema, yupToFormErrors} from 'formik';
import React, { useEffect } from 'react';
import { number, object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { Addaddress, UpdateAddress } from '../Redux/Slice/Address.Slice';

export default function AddShipingAddress({route, navigation}) {

  console.log("routerouterouteroute",route);
  
  
  
  let userSchema = object({
    name: string()
      .required('Please enter name')
      .matches(/^[a-zA-Z ]+$/, 'Please enter valid name'),
      address : string().required('Please Enter Address'),
      city : string().required('Please Enter City name'),
      state : string().required('Please Enter State'),
      zipcode : string().required().matches(/^\d{5}(?:[-\s]\d{4})?$/,'Please Enter Vaild Zip Code'),
      country : string().required('Please Enter Country')
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      address : '',
      city : '',
      state : '',
      zipcode : '',
      country : '',

    },

    validationSchema: userSchema,
    onSubmit: (values, {resetForm}) => {
      
      console.log("welcome");
      console.log('dsdd', values);
      hanldesave(values)
      resetForm()
      
    },
  });

  useEffect(() => {
    if (route.params) {
      setValues(route.params)
    }
    
  },[route.params])



  const dispatch = useDispatch();

  const hanldesave =  (data) => {
   
    console.log("datatatatatta",data);

    if (route.params) {
      dispatch(UpdateAddress({newData : {...data,uid : 'varshil'} , OldData:route.params}))
    } else {
      dispatch(Addaddress({...data,uid : 'varshil'}));
    }

    navigation.navigate('shippingaddress')
   
   
  }


  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    values,
    touched,
    setValues,
  } = formik;

  
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* <View style={styles.ArrowView}>
                <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Add shipping aNddress</Text>
            </View> */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChange('name')}
          value={values.name}
          onBlur={handleBlur('name')}

          
        
        />
         <Text style={{color: 'red'}}>{errors.name && touched.name ? errors.name : ''}</Text> 
        <TextInput
          style={styles.input}
          placeholder="Adrress"
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChange('address')}
          value={values.address}
          onBlur={handleBlur('address')}
        />
        <Text style={{color: 'red'}}>{errors.address && touched.address ? errors.address : ''}</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChange('city')}
          value={values.city}
          onBlur={handleBlur('city')}
        />
        <Text style={{color: 'red'}}>{errors.city && touched.city ? errors.city : ''}</Text>
        <TextInput
          style={styles.input}
          placeholder="State/Province/Region"
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChange('state')}
          value={values.state}
          onBlur={handleBlur('state')}
        />
        <Text style={{color: 'red'}}>{errors.state && touched.state ? errors.state : ''}</Text>
        <TextInput
          style={styles.input}
          placeholder="Zip Code (Postal Code)"
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChange('zipcode')}
          value={values.zipcode}
          onBlur={handleBlur('zipcode')}
        />
        <Text style={{color: 'red'}}>{errors.zipcode && touched.zipcode ? errors.zipcode : ''}</Text>
        <View style={styles.countryView}>
          <TextInput
            style={styles.input}
            placeholder="Country"
            autoCapitalize="none"
            placeholderTextColor="#9B9B9B"
            onChangeText={handleChange('country')}
            value={values.country}
            onBlur={handleBlur('country')}
          />
          
         
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="black"
            style={styles.Arrow}
          />
          <Text style={{color: 'red'}}> {errors.country && touched.country ? errors.country : ''}</Text>
     
        </View>
      </View>
      <TouchableOpacity style={styles.ButtonView} onPress={handleSubmit}>
        <View style={styles.ButtonUnderView}>
          <Text style={styles.AddCart}>{route.params ? 'Update Address' : 'Save Address'}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
    backgroundColor: '#F9F9F9',
  },
  ArrowView: {
    width: '100%',
    height: verticalScale(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 3,
    marginBottom: verticalScale(32),
  },
  ArrowText: {
    color: 'black',
    fontSize: moderateScale(23),
    marginTop: verticalScale(50),
    fontFamily: 'Metropolis-SemiBold',
    marginRight: horizontalScale(75),
  },
  KeyboardArrow: {
    marginTop: verticalScale(40),
    marginLeft: horizontalScale(-12),
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(20),
    paddingLeft: horizontalScale(10),
    color: 'red',
    borderRadius: moderateScale(5),
    fontSize: moderateScale(18),
    fontWeight: '500',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
  },
  countryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Arrow: {
    position: 'absolute',
    right: 9,
    bottom: 30,
  },
  ButtonView: {
    width: '100%',
    height: verticalScale(120),
    marginTop: verticalScale(20),
  },
  ButtonUnderView: {
    backgroundColor: '#DB3022',
    width: horizontalScale(340),
    height: verticalScale(50),
    margin: 'auto',
    borderRadius: moderateScale(50),
  },
  AddCart: {
    color: '#FFFFFF',
    fontFamily: 'Metropolis-Medium',
    fontSize: moderateScale(16),
    margin: 'auto',
  },
});

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {Getuserdata, Storegaedata} from '../Redux/Slice/auth.slice';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import { Image } from 'react-native';


const items = [''];


export default function Profile_Set() {
  const refRBSheet = useRef([]);
  const refVBSheet = useRef([]);
  const[image,setimage] = useState('')
  useEffect(() => {
    dispatch(Getuserdata())
  },[])

  const auth = useSelector(state => state.auth);
  console.log('authhhhhhhhhhhhhhhhhhhhhh', auth.auth?.url);

  useEffect(() => {
    if (auth.auth) {
      setValues(auth.auth)
    }
  },[auth.auth])

  let userSchema = object({
    name: string().required(),
    phoneNumber: string().required(),
    about: string().required(),
  });

  let formik = useFormik({
    initialValues: {
      name:'',
      phoneNumber:'',
      about:'',
    },

    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log('welcomassfe');
      console.log('dsdd', values);
      //   hanldesave(values)

      let usedata =''

      if (image === '') {
        if (auth.auth?.url) {
          usedata = auth.auth?.url
        } 
      } else {
        usedata = image
      }
      dispatch(Storegaedata({...values , url:usedata,uid:auth.auth?.uid}))
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

  console.log("errroororor",errors);
  

  const dispatch = useDispatch();

  const handleCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log("lsdfksndfs",image);
      setimage(image.path)
      let usedata = image.path
      dispatch(Storegaedata({...values , url:usedata,uid:auth.auth?.uid}))
      refRBSheet.current[0]?.close()
    });
  };

  const handleGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setimage(image.path)
      let usedata = image.path
      dispatch(Storegaedata({...values , url:usedata,uid:auth.auth?.uid}))
      refRBSheet.current[0]?.close()
    });
  };

  const renderItem = ({item, index, refRBSheet}) => {
    return (
      <View>
        <RBSheet ref={ref => (refRBSheet.current[index] = ref)}>
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottommini}>
              <View style={styles.bottomcover}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 10, marginLeft: 10}}>
                    <TouchableOpacity>
                   
                      <Fontisto name="close-a" size={15} color="#A9AEB1" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginLeft: 80}}>
                    <Text style={styles.bottomSheetText}>Profile photo</Text>
                  </View>
                </View>

                <View style={styles.bottomiconhead}>
                  <View>
                    <TouchableOpacity
                      style={styles.imagecircle2}
                      onPress={() => handleCamera()}>
                      <Feather name="camera" size={24} color="#DB3022" />
                      <View style={{marginTop: 10}}>
                        <Text>Camera</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.imagecircle2}
                      onPress={() => handleGallery()}>
                      <MaterialCommunityIcons
                        name="image-outline"
                        size={24}
                        color="#DB3022"
                      />
                      <View style={{marginTop: 10}}>
                        <Text>Gallery</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={styles.imagecircle2}>
                      <Fontisto name="smiling" size={24} color="#DB3022" />
                      <View style={{marginTop: 10}}>
                        <Text>Avatar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </RBSheet>
      </View>
      //  {item + 1}
    );
  };

  const ErenderItem = ({item, index, refVBSheet}) => {
    return (
      <View>
        <RBSheet ref={ref => (refVBSheet.current[index] = ref)}>
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottommini}>
              <View>
                <Text style={{color: 'black'}}>Enter Your name</Text>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                  <View style={styles.inputStyle}>
                    <TextInput></TextInput>
                  </View>
                  <View style={{marginLeft: 15, marginTop: 8}}>
                    <TouchableOpacity>
                      <Fontisto name="smiling" size={24} color="gray" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 190,
                    marginTop: 30,
                  }}>
                  <TouchableOpacity style={{marginRight: 30}}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.cancelText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </RBSheet>
      </View>
      // {/* //  {item + 1} */}
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.profileView}>
        <TouchableOpacity
          style={styles.profilecircle}
          onPress={() => refRBSheet.current[0]?.open()}>
             {
                      auth.auth?.url? 
                      <Image source={{uri: auth.auth?.url}} style={styles.profilecircle} />
                      :
                      <FontAwesome name="user" size={100} color="#A9AEB1" />
                    }
         
        </TouchableOpacity>
        <View style={styles.cameracircle}>
          <TouchableOpacity onPress={() => refRBSheet.current[0]?.open()}>
            <Feather name="camera" size={23} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ProfilebodyHead}>
        <TouchableOpacity>
          <View style={styles.Profilebody}>
            <View style={{width: '10%', justifyContent: 'center'}}>
              <TouchableOpacity>
                <FontAwesome name="user" size={23} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={{width: '85%'}}>
              <TextInput
                style={styles.input}
                name="name"
                placeholder="name"
                autoCapitalize="none"
                placeholderTextColor="#9B9B9B"
                onChangeText={handleChange('name')}
                value={values.name}
                onBlur={handleBlur('name')}
              />
            </View>

           
            <View style={{width: '10%'}}>
              <TouchableOpacity onPress={() => refVBSheet.current[0]?.open()}>
                {/* <MaterialIcons name="edit" size={23} color="#DB3022" /> */}
              </TouchableOpacity>
            </View>
            <Text style={{color: 'red'}}>
              {errors.name && touched.name ? errors.name : ''}
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            borderWidth: 0.1,
            marginLeft: 48,
            backgroundColor: 'gray',
          }}></View>
        <TouchableOpacity>
          <View style={styles.Profilebody}>
            <View style={{width: '10%', justifyContent: 'center'}}>
              <TouchableOpacity>
                <EvilIcons name="exclamation" size={26} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={{width: '85%'}}>
              <TextInput
                values={auth.auth?.about}
                style={styles.input}
                placeholder="about"
                autoCapitalize="none"
                placeholderTextColor="#9B9B9B"
                 name="about"
                onChangeText={handleChange('about')}
                value={values.about}
                onBlur={handleBlur('about')}
              />
               
            </View>
            {/* <View style={{ width: '10%' }}><TouchableOpacity><MaterialIcons name="edit" size={23} color="#DB3022" /></TouchableOpacity></View> */}
          </View>
          <Text style={{color: 'red'}}>
              {errors.about && touched.about ? errors.about : ''}
            </Text>
        </TouchableOpacity>
        {/* <View
          style={{
            width: '90%',
            borderWidth: 0.2,
            marginLeft: 48,
            backgroundColor: 'gray',
          }}></View> */}
        <TouchableOpacity>
          <View style={styles.Profilebody}>
            <View style={{width: '10%', justifyContent: 'center'}}>
              <TouchableOpacity>
                <MaterialIcons name="phone" size={23} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={{width: '85%'}}>
              <TextInput
               value={values.phoneNumber}
                style={styles.input}
                placeholder="Phone"
                autoCapitalize="none"
                name="phoneNumber"
                placeholderTextColor="#9B9B9B"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
              />
               <Text style={{color: 'red'}}>
              {errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''}
            </Text>
            </View>
            {/* <View style={{ width: '10%' }}><TouchableOpacity><MaterialIcons name="edit" size={23} color="#DB3022" /></TouchableOpacity></View> */}
          </View>
        </TouchableOpacity>
        {/* <View
          style={{
            width: '90%',
            borderWidth: 0.2,
            marginLeft: 48,
            backgroundColor: 'gray',
          }}></View> */}

        <View style={{flex: 1}}>
          <FlatList
            data={items}
            renderItem={props => renderItem({...props, refRBSheet})}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={items}
            renderItem={props => ErenderItem({...props, refVBSheet})}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{fontSize: moderateScale(17), color: 'white'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    position: 'relative',
  },
  profilecircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 0,
    backgroundColor: '#DDDFE0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfilebodyHead: {
    flex: 0,
    marginTop: 20,
    // justifyContent:'center',
    // alignItems:'center'
  },
  Profilebody: {
    width: '90%',
    flexDirection: 'row',
    // columnGap: 10,
    margin: 15,
  },
  cameracircle: {
    width: 49,
    height: 49,
    position: 'absolute',
    borderRadius: 50,
    top: 106,
    left: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB3022',
    elevation: 4,
  },
  imagecircle2: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomiconhead: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 28,
    marginTop: 55,
  },
  bottomTextView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  bottommini: {
    rowGap: 10,
    marginTop: 5,
  },
  bottomSheetContainer: {
    margin: 20,
  },
  bottomSheetText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginTop: 5,
  },
  bottomcover: {
    width: '100%',
    height: 200,
  },
  inputStyle: {
    width: '80%',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 5,
  },
  cancelText: {
    color: '#DB3022',
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
  input: {
    // width: 350,

    height: horizontalScale(60),
    backgroundColor: '#FFFFFF',
    margin: horizontalScale(10),
    padding: horizontalScale(10),
    color: 'Black',
    borderRadius: moderateScale(10),
    fontSize: moderateScale(14),
    fontWeight: '500',
    elevation: 1,
  },
});

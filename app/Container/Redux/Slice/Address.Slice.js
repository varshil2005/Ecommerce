import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';
import { create } from 'react-test-renderer';

const initialstate = {
  isLoading: false,
  Address: [],
  error: null,
};

export const Addaddress = createAsyncThunk(
    'address/Addaddress',

    async (data) => {
      
        console.log("efsdgfdfgdfgdfgdfgsdf",data);
  
    console.log('First Time when Cart is empty');
    const addressdata = [];

    const userDoc = await firestore().collection('Address').doc(data.uid);
    const userref = await userDoc.get();

    try {
      if (userref.exists) {
        await userDoc.update({
          address : firebase.firestore.FieldValue.arrayUnion(
              data
        )
        })
      } else {
        await userDoc.set({
          address : [data]
        })
      }

      const AddressData = [];

      await firestore()
          .collection('Address')
          .doc(data.uid)
          .get()
          .then(documentSnapshot => {
            console.log(
              'sdfsdfsdfsdfsdfsdfsdfsdf',
              'User exists: ',
              documentSnapshot.exists,
            );
  
            if (documentSnapshot.exists) {
              console.log('User data: ', documentSnapshot.data());
              AddressData.push({
                id: documentSnapshot.id,
                ...documentSnapshot.data(),
              });
            }
          });
        console.log('CartDataCartDataCartData', AddressData);
      return AddressData
    } catch (error) {
      
    }



      
    }
    
)

export const getAddress = createAsyncThunk(
  'address/getAddress',
  async (id) => {
    const AddressData = [];
    try {
      await firestore()
        .collection('Address')
        .doc(id)
        .get()
        .then(documentSnapshot => {
          console.log(
            'sdfsdfsdfsdfsdfsdfsdfsdf',
            'User exists: ',
            documentSnapshot.exists,
          );

          if (documentSnapshot.exists) {
            console.log('User data: ', documentSnapshot.data());
            AddressData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          }
        });
      console.log('CartDataCartDataCartData', AddressData);
      return AddressData
    } catch (error) {
      console.log(error);
    }

  }
)

export const DeleteAddress = createAsyncThunk(
  'address/DeleteAddress',
  async (data) => {

    // const {address} = getState();
    // console.log("addressaddressaddress",address.Address[0].address);

    const userDoc = await firestore().collection('Address').doc(data.uid);
    console.log("userDocuserDocuserDoc",data);
    
    
    try {
      await userDoc.update({
        address: firebase.firestore.FieldValue.arrayRemove(
          data
        ),
      });

      const AddressData = [];

      await firestore()
          .collection('Address')
          .doc(data.uid)
          .get()
          .then(documentSnapshot => {
            console.log(
              'sdfsdfsdfsdfsdfsdfsdfsdf',
              'User exists: ',
              documentSnapshot.exists,
            );
  
            if (documentSnapshot.exists) {
              console.log('User data: ', documentSnapshot.data());
              AddressData.push({
                id: documentSnapshot.id,
                ...documentSnapshot.data(),
              });
            }
          });
        console.log('CartDataCartDataCartData', AddressData);
      return AddressData
    } catch (error) {
      console.log(error);
      
    }
  }
)

export const UpdateAddress = createAsyncThunk(
  'address/UpdateAddress',

  async (data) => {
    
      console.log("Aviiiiiiii",data);

  console.log('First Time when Cart is empty');
  const addressdata = [];

  const userDoc = await firestore().collection('Address').doc(data.newData.uid);
  const userref = await userDoc.get();

  try {

    await userDoc.update({
      address: firebase.firestore.FieldValue.arrayRemove(
        data.OldData
      ),
    });
   
      await userDoc.update({
        address : firebase.firestore.FieldValue.arrayUnion(
            data.newData
      )
      })
 

    const AddressData = [];

    await firestore()
        .collection('Address')
        .doc(data.OldData.uid)
        .get()
        .then(documentSnapshot => {
          console.log(
            'sdfsdfsdfsdfsdfsdfsdfsdf',
            'User exists: ',
            documentSnapshot.exists,
          );

          if (documentSnapshot.exists) {
            console.log('User data: ', documentSnapshot.data());
            AddressData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          }
        });
      console.log('CartDataCartDataCartData', AddressData);
    return AddressData
  } catch (error) {
    
  }



    
  }
  
)


const AddressSlice = createSlice({
    name: 'Cart',
    initialState: initialstate,
    extraReducers: builder => {
    builder.addCase(Addaddress.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Address = action.payload;
    });
    builder.addCase(getAddress.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Address = action.payload;
    });
    builder.addCase(DeleteAddress.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Address = action.payload;
    });
    builder.addCase(UpdateAddress.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Address = action.payload;
    });
  }
   
  });

  export default AddressSlice.reducer
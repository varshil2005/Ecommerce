import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';

const initialstate = {
  isLoading: false,
  cart: [],
  error: null,
};

export const AddToCart = createAsyncThunk('cart/AddToCart', async data => {
  console.log('datatadattada', data);

  const userDoc = await firestore().collection('Cart').doc(data.uid);
  const userData = await userDoc.get();

  console.log('userDatauserDatauserDatauserData', userData);

  if (userData.exists) {
    try {
      await userDoc.update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          pid: data.id,
          qtn: 1,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    await firestore()
      .collection('Cart')
      .doc(data.uid)
      .set({
        cart: [{pid: data.id, qtn: 1}],
      })
      .then(() => {
        console.log('User added!');
      });
  }
});

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialstate,
  //   reducers: {
  //     addCart: (state, action) => {
  //       console.log('idididiiididiididid', action.payload);

  //       const index = state.cart.findIndex(v => v.pid === action.payload);
  //       console.log('indexindexindexindex', index);

  //       if (index === -1) {
  //         state.cart.push({pid: action.payload, qtn: 1});
  //       } else {
  //         state.cart[index].qtn++;
  //       }
  //     },

  //     IncQty: (state, action) => {
  //       const index = state.cart.findIndex(v => v.pid === action.payload);
  //       state.cart[index].qtn++;
  //     },

  //     DecQty: (state, action) => {
  //       const index = state.cart.findIndex(v => v.pid === action.payload);
  //       if (state.cart[index].qtn > 1) {
  //         state.cart[index].qtn--;
  //       }
  //     },
  //   },
 
});

export const {addCart, IncQty, DecQty} = CartSlice.actions;
export default CartSlice.reducer;

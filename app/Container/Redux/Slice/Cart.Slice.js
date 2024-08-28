import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';

const initialstate = {
  isLoading: false,
  Cart: [],
  error: null,
};

export const AddToCart = createAsyncThunk('Cart/AddToCart', async data => {
  console.log('datatadattada', data);
  let BagData = [];

  const userDoc = await firestore().collection('Cart').doc(data.uid);
  await userDoc.get().then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      BagData.push(documentSnapshot.data());
      console.log('BagDataBagDataBagData', BagData);
    }
  });
  if (BagData.length > 0) {
    const index = BagData[0].cart.findIndex(v => v.pid === data.id);
    console.log('indexindexindexindex', index);

    try {
      if (index != -1) {
        console.log('Third Time');

        await userDoc.update({
          cart: firebase.firestore.FieldValue.arrayRemove({
            pid: data.id,
            qtn: BagData[0].cart[index].qtn,
          }),
        });

        await userDoc.update({
          cart: firebase.firestore.FieldValue.arrayUnion({
            pid: data.id,
            qtn: BagData[0].cart[index].qtn + 1,
          }),
        });
      } else {
        console.log('Second Time');

        await userDoc.update({
          cart: firebase.firestore.FieldValue.arrayUnion({
            pid: data.id,
            qtn: 1,
          }),
        });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('First Time when Cart is empty');

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

export const getBag = createAsyncThunk(
  'Cart/getBag',

  async id => {
    const CartData = [];
    try {
      await firestore()
        .collection('Cart')
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
            CartData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          }
        });
      console.log('CartDataCartDataCartData', CartData);
    } catch (error) {
      console.log(error);
    }

    return CartData;
  },
);

export const IncQty = createAsyncThunk(
  'Cart/IncQty',

  async (data, {getState}) => {
    const {cart} = getState();

    console.log('cartcart', cart?.Cart[0]?.cart);

    const index = cart?.Cart[0]?.cart.findIndex(v => v.pid === data.id);
    console.log('indexindexindexindex', index);

    const userDoc = await firestore().collection('Cart').doc(data.uid);

    try {
   

      await userDoc.update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          pid: data.id,
          qtn: cart?.Cart[0]?.cart[index].qtn,
        }),
      });

      await userDoc.update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          pid: data.id,
          qtn: cart?.Cart[0]?.cart[index].qtn + 1,
        })

        
      });

      await userDoc.update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          pid: data.id,
          qtn: 1,
        }),
      });
  
    } catch (error) {
      console.log(error);
    }
  },
);

// if (userData.exists) {
//   try {
//     await userDoc.update({
//       cart: firebase.firestore.FieldValue.arrayUnion({
//         pid: data.id,
//         qtn: 1,
//       }),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// } else {
//   await firestore()
//     .collection('Cart')
//     .doc(data.uid)
//     .set({
//       cart: [{pid: data.id, qtn: 1}],
//     })
//     .then(() => {
//       console.log('User added!');
//     });
// }

const CartSlice = createSlice({
  name: 'Cart',
  initialState: initialstate,

  extraReducers: builder => {
    builder.addCase(getBag.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Cart = action.payload;
    });
    builder.addCase(IncQty.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Cart = action.payload;
    });
  },
});

// export const {addCart, IncQty, DecQty} = CartSlice.actions;
export default CartSlice.reducer;

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

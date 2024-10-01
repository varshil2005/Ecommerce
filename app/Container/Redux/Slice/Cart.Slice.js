import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';

const initialstate = {
  isLoading: false,
  Cart: [],
  error: null,
};

export const AddToCart = createAsyncThunk('Cart/AddToCart', async data => {
  console.log('datatadattada', data.uid);
  let BagData = [];

  const userDoc = await firestore().collection('Cart').doc(data.uid);
  console.log("asdasdasdas",userDoc);
  
     await userDoc.get().then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      BagData.push(documentSnapshot.data());
      console.log('BagDataBagDataBagData', BagData[0].cart);
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

      BagData = []

      await userDoc.get().then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
      
        
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          BagData.push(documentSnapshot.data());
          console.log('BagDataBagDataBagData', BagData[0].cart);
        }
      });
    
      console.log("adagsdagsdacsdgacsdgascd",BagData[0].cart);
    } catch (error) {
      console.log("kkkkkkkkkkgggg",error);
    }

  
    return BagData
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
    console.log('adsasdasdasd', id);

    const CartData = [];
    try {
     await firestore()
      .collection('Cart')
      .doc(id)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
    console.log("asadfghhjj",documentSnapshot.data());
    
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          CartData.push({id : documentSnapshot.id,...documentSnapshot.data()});
        }
      });

    console.log("asdasddddddddddd",CartData);
    
    } catch (error) {
      console.log(error);
    }
    console.log("asdasdasDASD",CartData);
    

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
        }),
      });

      let BagData = [];

      await userDoc.get().then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          BagData.push(documentSnapshot.data());
          console.log('BagDataBagDataBagData', BagData);
        }
      });

      return BagData;
    } catch (error) {
      console.log(error);
    }
  },
);

export const DecQty = createAsyncThunk(
  'Cart/DecQty',

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
          qtn: cart?.Cart[0]?.cart[index].qtn - 1,
        }),
      });

      let BagData = [];

      await userDoc.get().then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          BagData.push(documentSnapshot.data());
          console.log('BagDataBagDataBagData', BagData);
        }
      });

      return BagData;
    } catch (error) {
      console.log(error);
    }
  },
);

export const DeleteCart = createAsyncThunk(
  'Cart/DeleteCart',

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

      let BagData = [];

      await userDoc.get().then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          BagData.push(documentSnapshot.data());
          console.log('BagDataBagDataBagData', BagData);
        }
      });

      return BagData;
    } catch (error) {
      console.log(error);
    }
  },
);

const CartSlice = createSlice({
  name: 'Cart',
  initialState: initialstate,

  extraReducers: builder => {
   
    
    builder.addCase(getBag.fulfilled, (state, action) => {
      console.log('actionactionactionyyyyy', action.payload);
      state.Cart = action.payload;
    });
    builder.addCase(IncQty.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Cart = action.payload;
    });
    builder.addCase(DecQty.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Cart = action.payload;
    });

    builder.addCase(DeleteCart.fulfilled, (state, action) => {
      console.log('actionactionaction', action);

      // Add user to the state array
      state.Cart = action.payload;
    });

    builder.addCase(AddToCart.fulfilled, (state, action) => {
      console.log('actionactionaction', action.payload[0].cart);
      state.Cart = action.payload;
    });

   
  },
});
export default CartSlice.reducer;


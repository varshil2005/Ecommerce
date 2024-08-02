import { addDoc } from "@react-native-firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialstate = {
    isLoading: false,
    productdata: [],
    error: null,
};
export const getPrdouct = createAsyncThunk(
     'shopping/subBycat',
     async () => {
      
            let Productdata = [];
          await firestore()
            .collection('Product')
            .get()
            .then(querySnapshot => {
      
              console.log('Total users: ', querySnapshot.size);
            //   console.log("lllllllllllllllllllllldfdsfs",c);
      
              querySnapshot.forEach(documentSnapshot => {
                Productdata.push({
                    id : documentSnapshot.id,
                    ...documentSnapshot.data(),
                  });
                  

              });
            });
            
            // console.log("Clear data" , Productdata);
           
          
          
          return Productdata
    }
) 

const ShoppingSlice = createSlice({
    name : 'shopping',
    initialState: initialstate,
    extraReducers : (builder) => {
        builder.addCase(shop.fulfilled, (state, action) => {
            // Add user to the state array
            state.productdata = action.payload
          })
        }
})

export default ShoppingSlice.reducer
import { addDoc } from "@react-native-firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialstate = {
    isLoading: false,
    BrandData: [],
    error: null,
};






export const getBrand = createAsyncThunk(
    'Brand/getBrand',
    async () => {
     
           let BrandData = [];
         await firestore()
           .collection('Brand')
           .get()
           .then(querySnapshot => {
     
             console.log('Total users: ', querySnapshot.size);
           //   console.log("lllllllllllllllllllllldfdsfs",c);
     
             querySnapshot.forEach(documentSnapshot => {
                BrandData.push({
                   id : documentSnapshot.id,
                   ...documentSnapshot.data(),
                 });
                 

             });
           });
           
           console.log("Clear data" , BrandData);
          
         
         
         return BrandData
   }
) 

const BrandSlice = createSlice({
    name : 'shopping',
    initialState: initialstate,
    extraReducers : (builder) => {
        builder.addCase(getBrand
            .fulfilled, (state, action) => {
              state.BrandData = action.payload
            })
        }
})



export default BrandSlice.reducer
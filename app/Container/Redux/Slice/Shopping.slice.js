import { addDoc } from "@react-native-firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialstate = {
    isLoading: false,
    productdata: [],
    error: null,
};
export const prodBysub= createAsyncThunk(
     'shopping/subBycat',
     async (data) => {
       console.log("cate_id",data.cate_id);
       console.log("subcat_id",data.subcate_id);
            let Productdata = [];
          await firestore()
            .collection('Product')
            .get()
            .then(querySnapshot => {
      
              console.log('Total users: ', querySnapshot.size);
            //   console.log("lllllllllllllllllllllldfdsfs",c);
      
              querySnapshot.forEach(documentSnapshot => {
                 if ((documentSnapshot.data().category_id === data.cate_id) &&  (documentSnapshot.data().Subcategory_id === data.subcate_id)) {
                    Productdata.push({
                        id : documentSnapshot.id,
                        ...documentSnapshot.data(),
                      });
                 }
                  

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
        builder.addCase(prodBysub.fulfilled, (state, action) => {
            // Add user to the state array
            state.productdata = action.payload
          })
        }
})

export default ShoppingSlice.reducer
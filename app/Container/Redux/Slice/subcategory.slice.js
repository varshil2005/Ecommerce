import { addDoc } from "@react-native-firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialstate = {
    isLoading: false,
    subcategorydata: [],
    error: null,
};
export const subBycat= createAsyncThunk(
     'subcategory/subBycat',
     async (cat_id) => {
       
            let Subdata = [];
          await firestore()
            .collection('Sub Category')
            .get()
            .then(querySnapshot => {
      
              console.log('Total users: ', querySnapshot.size);
              console.log("lllllllllllllllllllllldfdsfs",cat_id);
      
              querySnapshot.forEach(documentSnapshot => {
                 if (documentSnapshot.data().categoryid === cat_id) {
                        Subdata.push({
                          id: documentSnapshot.id,
                          ...documentSnapshot.data(),
                        });
                 }
                  

              });
            });
            
            console.log("Clear data" , Subdata);
           
          
          
          return Subdata
    }
) 

const subcategorySlice = createSlice({
    name : 'subcategory',
    initialState: initialstate,
    extraReducers : (builder) => {
        builder.addCase(subBycat.fulfilled, (state, action) => {
            // Add user to the state array
            state.subcategorydata = action.payload
          })
        }
})

export default subcategorySlice.reducer
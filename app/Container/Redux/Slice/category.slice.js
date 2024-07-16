import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialstate = {
    isLoading: false,
    categorydata: [],
    error: null,
  };


  export const fetchcategory = createAsyncThunk(
    'category/fetchcategory',
    async () => {
        try {
            let categorydata = [];
          await firestore()
            .collection('Category')
            .get()
            .then(querySnapshot => {
      
              console.log('Total users: ', querySnapshot.size);
      
              querySnapshot.forEach(documentSnapshot => {
                  // console.log("lllll",'User ID: ', documentSnapshot.id, documentSnapshot.data());
      
                categorydata.push({
                  id: documentSnapshot.id,
                  ...documentSnapshot.data(),
      
                  
                });
                // console.log(data);
                console.log("hhhhhhhh",categorydata);
              });
            });
      
            return categorydata;
          } catch (error) {
            console.log(error);
          }
    }
  )

  const categoryslice = createSlice ({
    name: 'category',
    initialState: initialstate,
    extraReducers: (builder) => {
        builder.addCase(fetchcategory.fulfilled, (state, action) => {
            // Add user to the state array
            state.categorydata = action.payload
          })
    }
  });

  export default  categoryslice.reducer


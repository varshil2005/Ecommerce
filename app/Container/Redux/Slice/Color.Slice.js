import { addDoc } from "@react-native-firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialstate = {
    isLoading: false,
    colordata: [],
    error: null,
};


export const getcolor = createAsyncThunk(
     'color/getcolor',
     async () => {
      
            let colordata = [];
          await firestore()
            .collection('Color')
            .get()
            .then(querySnapshot => {
      
              console.log('Total users: ', querySnapshot.size);
            //   console.log("lllllllllllllllllllllldfdsfs",c);
      
              querySnapshot.forEach(documentSnapshot => {
                colordata.push({
                    id : documentSnapshot.id,
                    ...documentSnapshot.data(),
                  });
                  

              });
            });
            
            // console.log("Clear data" , colordata);
           
          
          
          return colordata
    }
) 


const ColorSlice = createSlice({
    name : 'shopping',
    initialState: initialstate,
    extraReducers : (builder) => {
        builder.addCase(getcolor
          .fulfilled, (state, action) => {
            // Add user to the state array
            state.colordata = action.payload
          })
        }
})



export default ColorSlice.reducer
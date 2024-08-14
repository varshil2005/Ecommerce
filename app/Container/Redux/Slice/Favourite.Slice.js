import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialstate = {
    isLoading: false,
    Favourite: [],
    error: null,
};


// export const gogglefavourite = createAsyncThunk(
//     'Brand/getBrand',
//     async () => {
     
//            let BrandData = [];
//          await firestore()
//            .collection('Brand')
//            .get()
//            .then(querySnapshot => {
     
//              console.log('Total users: ', querySnapshot.size);
//            //   console.log("lllllllllllllllllllllldfdsfs",c);
     
//              querySnapshot.forEach(documentSnapshot => {
//                 BrandData.push({
//                    id : documentSnapshot.id,
//                    ...documentSnapshot.data(),
//                  });
                 

//              });
//            });
           
//            console.log("Clear data" , BrandData);
          
         
         
//          return BrandData
//    }
// ) 


export const togglefavourite = createAsyncThunk(
    'Favourite/togglefavourite',
    async (id) => {
        console.log("sdfghjk",id);
        return id
    }

   

)


const FavoriteSlice = createSlice({
    name : 'Favourite',
    initialState: initialstate,
    extraReducers : (builder) => {
        builder.addCase(togglefavourite.fulfilled, (state, action) => {
            // Add user to the state array
            state.Favourite = action.payload
          })
        }
})

export default FavoriteSlice.reducer
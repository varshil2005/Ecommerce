import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialstate = {
  isLoading: false,
  Favourite: [],
  error: null,
};

export const togglefavourite = createAsyncThunk(
  'Favourite/togglefavourite',
  async id => {
    console.log('fevefgefgf', id);

    const favdata = [];
    await firestore()
      .collection('Fav')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          favdata.push({id: documentSnapshot.id, ...documentSnapshot.data()});
        });
      });

    const alvfav = favdata.find(v => v.pid === id);
    console.log('favdatafavdata', alvfav);

    if (alvfav) {
      await firestore()
        .collection('Fav')
        .doc(alvfav.id)
        .delete()
        return favdata.filter((v) => v.pid !== id);
    } else {
      let favId = '';
      firestore()
        .collection('Fav')
        .add({
          pid: id,
          uid: 1,
        })
        .then(doc => {
          favId = doc.id;
          console.log('User added!');
          console.log('favIdfavId', favId);
        });

      return favdata.concat({
        pid: id,
        uid: 1,
        id: favId,
      });
    }
    // return id
  },
);

const FavoriteSlice = createSlice({
  name: 'Favourite',
  initialState: initialstate,
  extraReducers: builder => {
    builder.addCase(togglefavourite.fulfilled, (state, action) => {
      // Add user to the state array
      state.Favourite = action.payload;
    });
  },
});

export default FavoriteSlice.reducer;

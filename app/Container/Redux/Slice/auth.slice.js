import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const initialstate = {
  isLoading: false,
  Address: [],
  error: null,
};

export const SignupwithEmail = createAsyncThunk(
  'auth/SignupwithEmail',

  async (data) => {
    try {
      await auth()
        .createUserWithEmailAndPassword(
          data.email,
          data.password,
        )
        .then(async({user}) => {
            await user.sendEmailVerification()
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } catch (error) {
      console.log('weeewe', error);
    }
  },
);

export const LoginwithEmail = createAsyncThunk(
    'auth/LoginwithEmail',
  
    async (data) => {
      try {
        await auth()
          .signInWithEmailAndPassword(
            data.email,
            data.password,
          )
          .then(async(user) => {
             
              if ( user.user?.emailVerified ) {
                console.log('User account signed in!');
              } else {
                console.log('Email verification failed');
              }
           
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
  
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
  
            console.error(error);
          });
      } catch (error) {
        console.log('weeewe', error);
      }
    },
  );

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialstate,
  extraReducers: builder => {},
});

export default AuthSlice.reducer;

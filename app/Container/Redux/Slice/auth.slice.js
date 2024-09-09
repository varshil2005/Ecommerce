import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-community/async-storage';

const initialstate = {
  isLoading: false,
  auth: null,
  error: null,
};

export const SignupwithEmail = createAsyncThunk(
  'auth/SignupwithEmail',

  async data => {
    try {
      await auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(async ({user}) => {
          await user.sendEmailVerification();
          console.log('User account created & signed in!');

          await firestore()
            .collection('Users')
            .doc(user.uid)
            .set({
              email: data.email,
              name: data.name,
              emailVerified: false,
            })
            .then(() => {
              console.log('User added!');
            });
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

  async data => {
    try {
      let userData = {};
      await auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(async ({user}) => {
          if (user.emailVerified) {
            await firestore()
              .collection('Users')
              .doc(user.uid)
              .update({
                emailVerified: true,
              })
              .then(async () => {
                console.log('User updated!');
                const user1 = await firestore()
                  .collection('Users')
                  .doc(user.uid)
                  .get();

                userData = user1.data();
              });
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

      return userData;
    } catch (error) {
      console.log('weeewe', error);
    }
  },
);

export const SignoutUser = createAsyncThunk(
  'auth/signoutUser',

  async () => {
    try {
      await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      await AsyncStorage.clear();
      return null;
    } catch (error) {
      console.log('rrrrrrrrrrrrrr', error);
    }
  },
);

export const SigninWithGoogle = createAsyncThunk(
  'auth/signinWithGoogle',

  async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      return auth().signInWithCredential(googleCredential);
    } catch (error) {}
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialstate,
  extraReducers: builder => {
    builder.addCase(SignupwithEmail.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
    builder.addCase(LoginwithEmail.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
    builder.addCase(SignoutUser.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
    builder.addCase(SigninWithGoogle.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
  },
});

export default AuthSlice.reducer;

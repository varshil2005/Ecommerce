import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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

export const googleLogin = createAsyncThunk('auth/googleLogin', async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    console.log("iddddddddddddddddddd",idToken);
    

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

    console.log("ggggggggggggggggggggggg", googleCredential);
    

    const x = await auth().signInWithCredential(googleCredential);

    console.log("xxxxxxxxxxxxxxxxxxxx",x);
    
    // Sign-in the user with the credential
    return x;
  } catch (error) {
    console.log("error google login: ", error);
  }
});

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
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      console.log("act googleeeeeeeeeeeee", action.payload);
      
      state.auth = action.payload;
    });
  },
});

export default AuthSlice.reducer;

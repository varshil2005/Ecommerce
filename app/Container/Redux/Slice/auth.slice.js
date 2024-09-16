import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

import AsyncStorage from '@react-native-community/async-storage';
import {LogBox} from 'react-native';

const initialstate = {
  isLoading: false,
  auth: null,
  error: null,
  confirmation: null,
};

// const [confirm, setConfirm] = useState(null);

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
              LoginType: 'EmailPass',
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

      await GoogleSignin.revokeAccess();

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
    const userInfo = await GoogleSignin.signIn();

    const {idToken} = await GoogleSignin.getTokens();

    console.log('iddddddddddddddddddd', userInfo);
    console.log('tokennnnnnnnnnn', idToken);

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

    console.log('ggggggggggggggggggggggg', googleCredential);

    const x = await auth().signInWithCredential(googleCredential);

    console.log('xxxxxxxxxxxxxxxxxxxx', x);

    // Sign-in the user with the credential
    await firestore()
      .collection('Users')
      .doc(x.user.uid)
      .set({
        email: x.user.email,
        name: x.user.displayName,
        emailVerified: True,
        LoginType: 'Google',
      })
      .then(() => {
        console.log('User added!');
      });
    return {
      email: x.user.email,
      name: x.user.displayName,
      emailVerified: true,
      LoginType: 'Google',
      uid: x.user.uid,
    };
  } catch (error) {
    console.log('error google login: ', error);
  }
});

export const facebboklogin = createAsyncThunk(
  'auth/facebookLogin',

  async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccessToken
      const data = await AccessToken.getCurrentAccessToken();

      console.log('dddddddddddddd', data);

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = await auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      console.log('facebookCredential', facebookCredential);

      const x = await auth().signInWithCredential(facebookCredential);

      console.log('ccccccccccccccc', x);

      await firestore()
        .collection('Users')
        .doc(x.user.uid)
        .set({
          email: x.user.email,
          name: x.user.displayName,
          emailVerified: true,
          LoginType: 'Facebook',
        })
        .then(() => {
          console.log('User added!');
        });
      return {
        email: x.user.email,
        name: x.user.displayName,
        emailVerified: true,
        LoginType: 'Facebook',
        uid: x.user.uid,
      };
    } catch (error) {
      console.log('eeeeeeeeeee', error);
    }
  },
);

export const LoginPhone = createAsyncThunk(
  'auth/LoginwithOtp',

  async data => {
    try {
      console.log('datatattaaaa', data);

      const confirmation = await auth().signInWithPhoneNumber(data.phoneNo);
      console.log('confirmation', confirmation);

      return confirmation;
    } catch (error) {
      console.log('errrrr', error);
    }
  },
);

export const VerifyOtp = createAsyncThunk(
  'auth/VerifyOtp',

  async data => {
    try {
      console.log('daatsdtdaystd', data);

      let code = data.code;
      const VerfityOtp = await data.confirm.confirm(code);
      console.log('VerfityOtpVerfityOtpVerfityOtp', VerfityOtp);
      await firestore()
        .collection('Users')
        .doc(VerfityOtp.user.uid)
        .set({
          name: null,
          email: null,
          phoneNumber: VerfityOtp.user.phoneNumber,
          emailVerified: true,
          LoginType: 'PhoneOtp',
        })
        .then(() => {
          console.log('User added!');
        });
      return {
        name: null,
        email: null,
        phoneNumber: VerfityOtp.user.phoneNumber,
        emailVerified: true,
        LoginType: 'PhoneOtp',
      };
    } catch (error) {
      console.log('Invalid code.');
    }
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
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      console.log('act googleeeeeeeeeeeee', action.payload);
      state.auth = action.payload;
    });
    builder.addCase(facebboklogin.fulfilled, (state, action) => {
      console.log('actfacebookkkkkk', action.payload);
      state.auth = action.payload;
    });
    builder.addCase(LoginPhone.fulfilled, (state, action) => {
      console.log('actfacebookkkkkk', action.payload);
      state.confirmation = action.payload;
    });
    builder.addCase(VerifyOtp.fulfilled, (state, action) => {
      console.log('actfacebookkkkkk', action.payload);
      state.auth = action.payload;
    });
  },
});

export default AuthSlice.reducer;

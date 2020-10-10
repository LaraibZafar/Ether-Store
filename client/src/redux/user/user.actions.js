import { userActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (userCredentials) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: userCredentials,
});

export const signInFailure = (errorMessage) => ({
  type: userActionTypes.EMAIL_SIGNIN_FAILURE,
  payload: errorMessage,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
});

export const signUpStart = (userCredentials) => ({
  type: userActionTypes.EMAIL_SIGNUP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, otherAttributes }) => ({
  type: userActionTypes.EMAIL_SIGNUP_SUCCESS,
  payload: { user, otherAttributes },
});

export const signUpFailure = (errorMessage) => ({
  type: userActionTypes.EMAIL_SIGNUP_FAILURE,
  payload: errorMessage,
});

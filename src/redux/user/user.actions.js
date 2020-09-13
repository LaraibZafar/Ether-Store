import { userActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSignInSuccess = (userCredentials) => ({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: userCredentials,
});

export const googleSignInFailure = (errorMessage) => ({
  type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (userCredentials) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: userCredentials,
});

export const emailSignInFailure = (errorMessage) => ({
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

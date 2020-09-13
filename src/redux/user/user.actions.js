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

export const emailSignInStart = () => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
});

export const emailSignInSuccess = (userCredentials) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: userCredentials,
});

export const emailSignInFailure = (errorMessage) => ({
  type: userActionTypes.EMAIL_SIGNIN_FAILURE,
  payload: errorMessage,
});

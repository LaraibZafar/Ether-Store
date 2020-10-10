import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import {
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,

} from "./user.actions";

import {
  auth,
  createUserDocument,
  googleProvider,
  getCurrentUser,
} from "../../firebase/firebase.utils";

export function* googleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInGoogle);
}

export function* emailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInEmail);
}

export function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, onUserSessionCheck);
}

export function* signOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* signUpStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNUP_START, emailSignUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.EMAIL_SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* signIn(user, otherAttributes) {
  try {
    const userReference = yield call(createUserDocument, user, otherAttributes);
    const userSnapshot = yield userReference.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInGoogle() {
  try {
    const userAuth = yield auth.signInWithPopup(googleProvider);
    yield signIn(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInEmail({ payload }) {
  const { email, password } = payload;
  try {
    const userAuth = yield auth.signInWithEmailAndPassword(email, password);
    yield signIn(userAuth);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, otherAttributes } }) {
  yield signIn({ user, otherAttributes });
}

export function* onUserSessionCheck() {
  try {
    const userAuth = yield getCurrentUser();
    if (userAuth) {
      yield signIn(userAuth);
    }
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* emailSignUp({ payload }) {
  const { email, password, displayName } = payload;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, otherAttributes: { displayName } }));
  } catch (error) {
    put(signUpFailure(error));
  }
}

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutStart),
    call(signUpStart),
    call(onSignUpSuccess),
  ]);
}

import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInSuccess,
  emailSignInFailure,
  signOutSuccess,
  signOutFailure,
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

export function* signInGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userReference = yield call(createUserDocument, user);
    const userSnapshot = yield userReference.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    put(googleSignInFailure(error));
  }
}

export function* signInEmail({ payload }) {
  const { email, password } = payload;
  console.log(email);
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userReference = yield call(createUserDocument, user);
    const userSnapshot = yield userReference.get();
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    put(emailSignInFailure(error));
  }
}

export function* onUserSessionCheck() {
  try {
    const userAuth = yield getCurrentUser();
    if (userAuth) {
      const userReference = yield call(createUserDocument, userAuth);
      const userSnapshot = yield userReference.get();
      yield put(
        emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield put(emailSignInFailure(error));
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

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutStart),
  ]);
}

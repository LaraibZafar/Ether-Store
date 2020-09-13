import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes } from "./user.types";
import { googleSignInFailure, googleSignInSuccess } from "./user.actions";

import {
  auth,
  createUserDocument,
  googleProvider,
} from "../../firebase/firebase.utils";

export function* googleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInGoogle);
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

export function* userSagas() {
  yield all([call(googleSignInStart)]);
}

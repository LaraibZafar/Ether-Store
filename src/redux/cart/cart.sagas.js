import { takeLatest, put, all, call } from "redux-saga/effects";
import { userActionTypes } from "../user/user.types";
import { emptyCart } from "./cart.actions";

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCart);
}

export function* clearCart() {
  yield put(emptyCart());
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

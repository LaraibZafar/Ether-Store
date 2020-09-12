import { takeEvery, call, put } from "redux-saga/effects";

import { shopActionTypes } from "./shop-item.types";
import { fetchDataSuccess, fetchDataFailure } from "./shop-item.actions";

import {
  firestore,
  transformShopDataCollection,
} from "../../firebase/firebase.utils";

export function* fetchDataStart() {
  yield takeEvery(shopActionTypes.FETCH_DATA_START, fetchDataFromFirestore);
}

export function* fetchDataFromFirestore() {
  try {
    const collectionReference = firestore.collection("Shop Data");
    const snapshot = yield collectionReference.get();
    const transformedData = yield call(transformShopDataCollection, snapshot);
    yield put(fetchDataSuccess(transformedData));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

import { all, call } from "redux-saga/effects";
import { fetchDataStart } from "./shop-item/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchDataStart), call(userSagas)]);
}

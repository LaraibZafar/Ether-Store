import { shopActionTypes } from "./shop-item.types";

import {
  firestore,
  transformShopDataCollection,
} from "../../firebase/firebase.utils";

export const fetchDataStart = () => ({
  type: shopActionTypes.FETCH_DATA_START,
});

export const fetchDataSuccess = (shopData) => ({
  type: shopActionTypes.FETCH_DATA_SUCCESS,
  payload: shopData,
});

export const fetchDataFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_DATA_FAILURE,
  payload: errorMessage,
});

export const fetchDataFromFirestore = () => {
  return (dispatch) => {
    const collectionReference = firestore.collection("Shop Data");
    dispatch(fetchDataStart());
    collectionReference
      .get()
      .then((snap) => {
        const transformedData = transformShopDataCollection(snap);
        dispatch(fetchDataSuccess(transformedData));
        console.log(transformedData);
      })
      .catch((error) => dispatch(fetchDataFailure(error.message)));
  };
};

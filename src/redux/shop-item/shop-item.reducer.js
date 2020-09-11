import { shopActionTypes } from "./shop-item.types";
const INITIAL_STATE = {
  shopItems: null,
  isFetching: false,
  errorMessage: "",
};

const shopItemReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_DATA_START:
      return {
        ...currentState,
        isFetching: true,
      };
    case shopActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...currentState,
        isFetching: false,
        shopItems: action.payload,
      };
    case shopActionTypes.FETCH_DATA_FAILURE:
      return {
        ...currentState,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return currentState;
  }
};

export default shopItemReducer;

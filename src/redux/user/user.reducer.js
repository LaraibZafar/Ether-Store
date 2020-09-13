import { userActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: "",
  errorMessage: null,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
    case userActionTypes.EMAIL_SIGNIN_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        errorMessage: null,
      };
    case userActionTypes.GOOGLE_SIGNIN_FAILURE:
    case userActionTypes.EMAIL_SIGNIN_FAILURE:
      return {
        ...currentState,
        errorMessage: action.payload,
      };
    default:
      return currentState;
  }
};

export default userReducer;

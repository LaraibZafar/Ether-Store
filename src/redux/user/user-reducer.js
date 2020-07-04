const INITIAL_STATE = {
  currentUser: "",
};

const userReducer = (currentState = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...currentState,
        currentUser: action.payload,
      };
    default:
      return currentState;
  }
};

export default userReducer;

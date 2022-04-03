import authActionTypes from "../actions/authActions";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SET_USER:
      return { ...state, user: action.payload };

    case authActionTypes.SIGN_IN:
      return { ...state, user: action.payload };

    case authActionTypes.SIGN_UP:
      return { ...state, user: action.payload };

    case authActionTypes.SIGN_OUT:
      return { ...state, user: null };

    default:
      return state;
  }
};

export default authReducer;

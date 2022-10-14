import authActionTypes from "../actions/authActions";

const initialState = {
  user: null,
  userProfile: null,
  initialRoute: null,
  workoutRoutines: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SET_USER:
      return { ...state, user: action.payload.user, userProfile: action.payload.userProfile };

    case authActionTypes.SET_INITIAL_ROUTE:
      return { ...state, initialRoute: action.payload };

    case authActionTypes.SET_USER_PROFILE:
      return { ...state, userProfile: action.payload };

    case 'SET_WORKOUT_ROUTINE': 
      return { ...state, workoutRoutines: [... state.workoutRoutines, action.payload] }
      
    default:
      return state;
  }
};

export default authReducer;

import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";

//combinedReducers used to combined many reducers together
const configureStore = () => {
  const combinedReducer = combineReducers({
    auth: authReducer,
  });

  const store = createStore(combinedReducer);

  return store;
};

export default configureStore;

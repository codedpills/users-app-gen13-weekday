import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;

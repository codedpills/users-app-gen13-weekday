import * as actionTypes from "./actionTypes";

export const signUpWithEmail = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    let firebase = getFirebase();
    console.log(firebase);
    dispatch({ type: actionTypes.ACTION_PENDING });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
};

export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

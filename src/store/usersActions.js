import * as actionTypes from "./actionTypes";

export const addUser = (user) => {
  console.log("addUser function called!");
  return (dispatch, getState, { getFirestore }) => {
    let firestore = getFirestore();
    dispatch({ type: actionTypes.ACTION_PENDING });
    firestore
      .collection("users")
      .add(user)
      .then((res) => {
        console.log(res);
        dispatch({ type: actionTypes.ADD_USER_SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actionTypes.ADD_USER_ERROR, payload: error });
      });
  };
};

export const deleteUser = (user_id) => {
  return (dispatch, getState, { getFirestore }) => {
    let firestore = getFirestore();
    dispatch({type: actionTypes.ACTION_PENDING})
    firestore
      .collection("users")
      .doc(user_id)
      .delete()
      .then(res => {
        console.log(res);
        dispatch({type: actionTypes.DELETE_USER_SUCCESS})
      })
      .catch((error) =>
        dispatch({ type: actionTypes.DELETE_USER_ERROR, payload: error })
      );
  };
};

export const editUser = (user_id, updated_info) => {
  return {
    type: "EDIT_USER",
    user_id: user_id,
    updated_info: updated_info,
  };
};

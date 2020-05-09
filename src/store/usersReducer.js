import { v4 as uuid } from 'uuid';
import * as actionTypes from './actionTypes';

const initialState = {
  pending: false,
  success: false,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_PENDING:
      console.log('pending called!')
      return {...state, pending: true}
    case actionTypes.ADD_USER_SUCCESS:
      return {...state, pending: false, success: true}
    case actionTypes.ADD_USER_ERROR:
      return {...state, pending: false, error: action.payload} 
    case actionTypes.EDIT_USER_SUCCESS:
      return {...state, pending: false, success: true}
    case actionTypes.EDIT_USER_ERROR:
      return {...state, pending: false, error: action.payload} 
    case actionTypes.DELETE_USER_SUCCESS:
      return {...state, pending: false, success: true}
    case actionTypes.DELETE_USER_ERROR:
      return {...state, pending: false, error: action.payload} 


    // case "ADD_USER":
    //   const newUser = {
    //     id: uuid(),
    //     name: action.payload.name,
    //     email: action.payload.email,
    //     gen: action.payload.gen
    //   };
    //   return { ...state, users: [...state.users, action.payload] };
    // case "DELETE_USER":
    //   const filteredUsers = state.users.filter(user => user.id !== action.payload);
    //   return {...state, users: filteredUsers}
    // case "EDIT_USER":
    //   const editedUsers = state.users.map(user => {
    //     if (user.id === action.user_id) {
    //       return {...user, ...action.updated_info}
    //     } else {
    //       return user;
    //     }
    //   });
    //   return {...state, users: editedUsers}
    default:
      return state;
  }
};

export default usersReducer;
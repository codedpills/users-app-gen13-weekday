import { v4 as uuid } from 'uuid';

const initialState = {
  users: [
    {
      id: "1",
      name: "Ahmed Zaky",
      email: "ahmed@email.com",
      gen: 1
    },
    {
      id: "2",
      name: "Emmanuel Adebayor",
      email: "emmanuel@email.com",
      gen: 4
    },
    {
      id: "3",
      name: "Asamoah Gyan",
      email: "asamoah@email.com",
      gen: 7
    },
    {
      id: "4",
      name: "Stephen Appiah",
      email: "stephen@email.com",
      gen: 7
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen
      };
      return { ...state, users: [...state.users, newUser] };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(user => user.id !== action.payload);
      return {...state, users: filteredUsers}
    case "EDIT_USER":
      const editedUsers = state.users.map(user => {
        if (user.id === action.user_id) {
          return {...user, ...action.updated_info}
        } else {
          return user;
        }
      });
      return {...state, users: editedUsers}
    default:
      return state;
  }
};

export default usersReducer;
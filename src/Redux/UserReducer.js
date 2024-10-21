import { createSlice } from "@reduxjs/toolkit";

// Load users from localStorage or fall back to an empty array
const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

const userSlice = createSlice({
  name: "users",
  initialState: { users: storedUsers },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUser: (state, action) => {
      state.users = state.users.map(user =>
        user.id === action.payload.id ? action.payload : user
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

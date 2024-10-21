import { createSlice } from '@reduxjs/toolkit';
import { userList } from  '../Data';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: userList,
  },
  reducers: {

    // this logic use to add new users
    addUser:(state,action)=> {
     state.users.push(action.payload);  

    },
    // this logic use to update users
    updateUser: (state, action) => {
      alert('Update user');
      state.users = state.users.map(user => user.id === action.payload.id? action.payload : user);
    },
  
  // this logic use to delete users
    deleteUser: (state, action) => {
      alert('Delete user');
      state.users = state.users.filter(user => user.id!==action.payload);
    },
   
    
  }
  
})
  export const { deleteUser,addUser,updateUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const userPostSlice = createSlice({
  name: "userPosts",
  initialState: {
    userPosts: [],
  },
  reducers: {
    getUserPosts(state, action) {
      state.userPosts = action.payload;
    },
    addUserPosts(state, action) {
      state.userPosts = [action.payload, ...state.userPosts];
    },
    deleteUserPosts(state, action) {
      state.userPosts = state.userPosts.filter(
        (post) => post._id !== action.payload
      );
    },
  },
});

export default userPostSlice.reducer;
export const { getUserPosts, addUserPosts, deleteUserPosts } =
  userPostSlice.actions;

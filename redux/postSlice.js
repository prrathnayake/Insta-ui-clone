import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
    likePost(state, action) {
      console.log(action.payload._id);
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    addPosts(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
    deletePosts(state, action) {
      state.posts = state.posts.filter((post) => post._id !== action.payload)
    },
  },
});

export default postSlice.reducer;
export const { getPosts, likePost, addPosts, deletePosts } = postSlice.actions;

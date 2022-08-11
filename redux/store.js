import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import usersReducer from './userSlice';
import userPostsReducer from './userPostSlice';
import searchPostsReducer from './searchPosts';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: usersReducer,
    userPosts: userPostsReducer,
    searchPosts: searchPostsReducer
  }
});
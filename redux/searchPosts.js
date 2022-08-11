import { createSlice } from "@reduxjs/toolkit";

const searchPostSlice = createSlice({
  name: "searchPosts",
  initialState: {
    searchPosts: [],
  },
  reducers: {
    getSearchPosts(state, action) {
      state.searchPosts = action.payload;
    },
  },
});

export default searchPostSlice.reducer;
export const { getSearchPosts } = searchPostSlice.actions;

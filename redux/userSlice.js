import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    update(state, action) {
      state.user = action.payload;
    },
    addPost(state, action) {
      state.user.uploades = [
        ...state.user.uploades,
        action.payload,
      ];
    },
    deletePost(state, action) {
      state.user.uploades = state.user.uploades.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export default userSlice.reducer;
export const { login, update, addPost, deletePost } = userSlice.actions;

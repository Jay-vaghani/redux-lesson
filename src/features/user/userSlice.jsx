import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "User 1" },
  { id: "2", name: "User 2" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllUser = (state) => state.user;

export default userSlice.reducer;

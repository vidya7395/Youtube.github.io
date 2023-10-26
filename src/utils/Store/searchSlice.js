import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    addToCacheList: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addToCacheList } = searchSlice.actions;
export default searchSlice.reducer;

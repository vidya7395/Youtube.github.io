import { createSlice } from "@reduxjs/toolkit";

const toggleSidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    isOpen: true,
    isOpen2: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggle2: (state) => {
      state.isOpen2 = !state.isOpen2;
    },
  },
});

export const { toggleMenu, toggle2 } = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;

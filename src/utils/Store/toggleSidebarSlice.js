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
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSidebarSlice";

const appStore = configureStore({
  reducer: {
    toggleSelector: toggleReducer,
  },
});
export default appStore;

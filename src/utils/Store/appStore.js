import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSidebarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    toggleSelector: toggleReducer,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default appStore;

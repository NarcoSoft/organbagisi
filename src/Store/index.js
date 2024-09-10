import { configureStore } from "@reduxjs/toolkit";
import sheetReducer from "./Slices/sheetSlice";

const store = configureStore({
  reducer: {
    sheet: sheetReducer,
  },
});

export default store;

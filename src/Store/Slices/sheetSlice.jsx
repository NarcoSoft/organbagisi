import { createSlice } from "@reduxjs/toolkit";

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: "home",
  reducers: {
    setSheetState: (state, action) => action.payload,
  },
});

export const { setSheetState } = sheetSlice.actions;
export default sheetSlice.reducer;

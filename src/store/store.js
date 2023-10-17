import { configureStore } from "@reduxjs/toolkit";
import fakeDataSlice from "../features/data/fakeDataSlice";

export const store = configureStore({
  reducer: {
    data: fakeDataSlice
  }
})
import { configureStore } from "@reduxjs/toolkit";
import { filmReducer } from "./FilmSlice.jsx"

export const store = configureStore({
  reducer: {
    film: filmReducer
  }
});

export default store;

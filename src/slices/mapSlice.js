/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState:{
    center: [59.8, 30.3333],
    zoom: 13,
    coordinatesPoints: [[0, 0]],
  },
  reducers: {
    setCenter: (state, action) => {
      action.payload ? (state.center = action.payload) : null;
    },
    setCoordinatesPoints: (state, action) => {
      state.coordinatesPoints = action.payload;
    },
  },
});

export const { setCoordinatesPoints, setCenter } = mapSlice.actions;

export default mapSlice.reducer;
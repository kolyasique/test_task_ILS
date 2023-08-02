import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  coordinates: "",
  pointa: "",
  pointb: "",
  pointc: "",
};

const activeRouteSlice = createSlice({
  name: "activeRoute",
  initialState,
  reducers: {
    setActiveRoute: (state, action) => {
      state.id = action.payload.key
      state.pointa = action.payload.pointa
      state.pointb = action.payload.pointb
      state.pointc = action.payload.pointc
      const coordinatesPoints = `${state.pointa};${state.pointb};${state.pointc}`;
      state.coordinates = coordinatesPoints?.split(";").map((el) => el.split(",").reverse().join(",")).join(";").replace(/\s/g, "");
    },
  },
});

export const { setActiveRoute } = activeRouteSlice.actions;

export default activeRouteSlice.reducer;
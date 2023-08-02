import { createSlice } from "@reduxjs/toolkit";


const routePolylineSlice = createSlice({
  name: "routePolyline",
  initialState: {
    pending: false,
    error: null,
    polyline: [],
  },
  reducers: {
    routePolylineSuccess: (state,action) => {
      state.pending = false;
      try {
        const coordinates = action?.payload.map((el) => {
          return el.slice().reverse();
        });
        state.polyline = coordinates;
      } catch (error) {
      }
      
    },
    routePolylineError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    clearRoutePolyline: (state) => {
      state.polyline = [];
    },
  },
});

export const {
  routePolylineSuccess,
  routePolylineError,
  clearRoutePolyline,
} = routePolylineSlice.actions;

export default routePolylineSlice.reducer;
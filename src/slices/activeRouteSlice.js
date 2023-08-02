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
      state.id = action.payload
      if(action.payload === 'tmp-0'){
        state.pointa = "59.84660399, 30.29496392"
        state.pointb = "59.82934196, 30.42423701"
        state.pointc = "59.83567701, 30.38064206"
      }
      else if(action.payload === 'tmp-1'){
        state.pointa = "59.82934196, 30.42423701"
        state.pointb = "59.82761295, 30.41705607"
        state.pointc = "59.84660399, 30.29496392"
      }
      else if(action.payload === 'tmp-2'){
        state.pointa = "59.83567701, 30.38064206"
        state.pointb = "59.84660399, 30.29496392"
        state.pointc =  "59.82761295, 30.41705607"
      }
    else {
      state.pointa = ""
      state.pointb = ""
      state.pointc =  ""
    }
      const coordinatesPoints = `${state.pointa};${state.pointb};${state.pointc}`;
      state.coordinates = coordinatesPoints?.split(";").map((el) => el.split(",").reverse().join(",")).join(";").replace(/\s/g, "");
    },
  },
});

export const { setActiveRoute } = activeRouteSlice.actions;

export default activeRouteSlice.reducer;
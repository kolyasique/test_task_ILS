/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      key: 'tmp-0',
      name: 'Маршрут 1',
      pointa: "59.84660399, 30.29496392", 
      pointb: "59.82934196, 30.42423701", 
      pointc:  "59.83567701, 30.38064206", 
     
    },
    {
      key: 'tmp-1',
      name: 'Маршрут 2',
      pointa: "59.82934196, 30.42423701", 
      pointb:  "59.82761295, 30.41705607", 
      pointc:  "59.84660399, 30.29496392", 
    },
    {
      key: 'tmp-2',
      name: 'Маршрут 3',
      pointa: "59.83567701, 30.38064206", 
      pointb: "59.84660399, 30.29496392", 
      pointc: "59.82761295, 30.41705607"
    },
  ]

const routeDataSlice = createSlice({
  name: "route",
  initialState,
  reducers: {},
});

export const {} = routeDataSlice.actions;

export default routeDataSlice.reducer;
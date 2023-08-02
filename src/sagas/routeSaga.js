import { call, put, takeLatest } from 'redux-saga/effects'
import {routePolylineSuccess,routePolylineError} from "../slices/routePolylineSlice";
import { getRoutePolyline } from "../api/getPolylineApi";
import { createAction } from "@reduxjs/toolkit";

export const fetchRouteAction = createAction("fetchRoute");

function* getRoutePolylines(action) {
  try {
    const routeLinesData = yield call(getRoutePolyline, action.payload);
    yield put(routePolylineSuccess(routeLinesData));
  } catch (error) {
    yield put(routePolylineError(error));
  }
}

function* routeSaga() {
  yield takeLatest(fetchRouteAction.type, getRoutePolylines);
}

export default routeSaga;
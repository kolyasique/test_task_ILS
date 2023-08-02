import { Iterable } from 'immutable'
import {
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import routeSaga from "../sagas/routeSaga";
import {
  activeRouteReducer,
  routePolylineReducer,
  mapReducer,
} from "../slices";

const sagaMiddleware = createSagaMiddleware();


const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})


export const store = configureStore({
  reducer: {
    activeRoute: activeRouteReducer,
    routePolyline: routePolylineReducer,
    map: mapReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(sagaMiddleware)

  middleware:
        (getdefaultMiddleware) =>
            getdefaultMiddleware()
            .concat([
              sagaMiddleware, 
              serializableMiddleware
                   ])

});

sagaMiddleware.run(routeSaga);
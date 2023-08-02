/* eslint-disable no-unused-expressions */
import { Menu } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveRoute } from "../slices/activeRouteSlice";
import { fetchRouteAction } from "../sagas/routeSaga";
import { clearRoutePolyline } from "../slices/routePolylineSlice";

import getItem from "../helpers/getItemFunc";


export default function MenuComponent(){
  
  const activeRoute = useSelector((state) => state.activeRoute);
  const dispatch = useDispatch();

  const items =[

      getItem(
        "Маршрут 1",
        "1", 
        null, 
        null, 
        'pointa',
        "59.84660399, 30.29496392", 
        "59.82934196, 30.42423701", 
        "59.83567701, 30.38064206", 
        '', 
        null, activeRoute.id ==='tmp-0' ? true : false),
        getItem(
          "Маршрут 2",
          "2", 
          null, 
          null, 
          'pointb',
          "59.82934196, 30.42423701", 
          "59.82761295, 30.41705607", 
          "59.84660399, 30.29496392", 
          '', 
          null, activeRoute.id ==='tmp-1' ? true : false),
          getItem(
            "Маршрут 3",
            "3", 
            null, 
            null, 
            'pointc',
            "59.83567701, 30.38064206", 
            "59.84660399, 30.29496392", 
            "59.82761295, 30.41705607", 
            '', 
            null, activeRoute.id ==='tmp-2' ? true : false),
  
  ]

  useEffect(() => {
    activeRoute.coordinates
      ? dispatch(fetchRouteAction(activeRoute.coordinates))
      : null;
  }, [dispatch, activeRoute.coordinates]);

  const onClick = (e) => {
    dispatch(clearRoutePolyline());
    dispatch(setActiveRoute(e.key));
  };

  return (
      <Menu
      onClick={onClick}
      style={{
        width: '100%',
      }}
      mode="inline"
      items={items}
    /> 
  );
};
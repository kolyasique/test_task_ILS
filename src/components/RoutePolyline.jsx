import { Polyline, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import { LatLngBounds } from "leaflet";
import { setCenter } from "../slices/mapSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RoutePolyline(){
  const map = useMap();
  const coordinates = useSelector((state) => state.routePolyline.polyline);
  const bounds = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      bounds.current = new LatLngBounds(coordinates);
      const center = bounds.current.getCenter();
      if (coordinates.length > 0) {
        dispatch(setCenter([center?.lat, center?.lng]));
        map.fitBounds(bounds.current);
      }
      else {
        dispatch(setCenter([59.8, 30.3333]));
      }
    } catch (error) {
    }
 
  }, [map, dispatch, coordinates]);

  return (
    <Polyline
      key={JSON.stringify(coordinates)}
      pathOptions={{ color: "red" }}
      positions={coordinates}
      smoothFactor={1}
      weight={3}
      opacity={0.9}
    />
  );
};
/* eslint-disable no-unused-expressions */
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCoordinatesPoints } from "../slices/mapSlice";

import RoutePolyline from './RoutePolyline';

import 'leaflet/dist/leaflet.css'

export default function MapContainerComponent(){

  const activeRoute = useSelector((state) => state.activeRoute);
  const center = useSelector((state) => state.map.center);
  const zoom = useSelector((state) => state.map.zoom);

  const dispatch = useDispatch();

  const pointsCoordinates = useRef([]);

  const mapMarker = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [10, 15],
    iconAnchor: [5, 15],
    popupAnchor: [20, -40],
  });

  useEffect(() => {
    activeRoute.id !== 0
      ? (pointsCoordinates.current = [
          activeRoute.pointa.split(", ").map((a) => Number(a)),
          activeRoute.pointb.split(", ").map((a) => Number(a)),
          activeRoute.pointc.split(", ").map((a) => Number(a)),
        ])
      : null;

    dispatch(setCoordinatesPoints(pointsCoordinates.current));
  }, [activeRoute, dispatch]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {pointsCoordinates?.current.map((el, i) => {
        return (
          <Marker
            key={i}
            position={el}
            icon={mapMarker}
          />
        );
      })}
      <RoutePolyline />
    </MapContainer>
  );
};
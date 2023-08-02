import axios from "axios";

export const getRoutePolyline = async (coord) => {
  try {
    const response = await axios.get(
      `https://router.project-osrm.org/route/v1/driving/${coord}?geometries=geojson&overview=full&alternatives=false`
    );
    return response.data.routes[0].geometry.coordinates;
  } catch (error) {
    return error;
  }
};
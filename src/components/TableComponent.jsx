/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { clearRoutePolyline } from '../slices/routePolylineSlice';
import { setActiveRoute } from '../slices/activeRouteSlice';
import { useDispatch, useSelector } from 'react-redux';
import columns from '../helpers/renderColumnFunc';
import { fetchRouteAction } from '../sagas/routeSaga';


export default function TableComponent(){
  const activeRoute = useSelector((state) => state.activeRoute);
  const data = useSelector((state) => state.route)
  const dispatch = useDispatch()

  useEffect(() => {
    activeRoute.coordinates
      ? dispatch(fetchRouteAction(activeRoute.coordinates))
      : null;
  }, [dispatch, activeRoute.coordinates]);

  const onClick1 = (e) => {
    dispatch(clearRoutePolyline());
    dispatch(setActiveRoute(e));
  };

  return(
<Table 
  columns={columns} 
  dataSource={data} 
  pagination={false}
  rowSelection={{ type: "radio", onSelect: onClick1 }}    
    />
  )

}
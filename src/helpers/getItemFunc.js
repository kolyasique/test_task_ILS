function getItem(
    label, 
    id, 
    icon, 
    children, 
    dataindex, 
    pointa, 
    pointb, 
    pointc, 
    coordinates, 
    type, disabled) {
    return {
      id,
      dataindex,
      pointa,
      pointb,
      pointc,
      icon,
      children,
      label,
      type, disabled
    };
  }

  export default getItem
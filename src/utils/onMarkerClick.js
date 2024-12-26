export const onMarkerClick = (map, branch) => {
  return map.setView(
    [
      +parseFloat(branch.LocationLatitudePoint),
      +parseFloat(branch.LocationLongitudePoint),
    ],
    map.getMaxZoom()
  );
};

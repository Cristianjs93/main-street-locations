import { locationsData } from '../data/constants/locationsData';

export function getFilteredLocations(bounds: google.maps.LatLngBounds) {
  const northEastLat = bounds?.getNorthEast().lat();
  const northEastLng = bounds?.getNorthEast().lng();
  const southWestLat = bounds?.getSouthWest().lat();
  const southWestLng = bounds?.getSouthWest().lng();

  return locationsData.filter(({ coordinates }) => {
    const { lat, lng } = coordinates;
    return (
      lat >= Number(southWestLat) &&
      lat <= Number(northEastLat) &&
      lng >= Number(southWestLng) &&
      lng <= Number(northEastLng)
    );
  });
}

import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getFilteredLocations } from '../utils/helpers';
import ILocation, { MapCoordinates } from '../interfaces/ILocation';
import { GoogleMap } from '@react-google-maps/api';
import Markers from './Markers';
import {
  getSelectedCity,
  setLocations,
  setSelectedLocation,
} from '../redux/slices/locations';

export default function Map() {
  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector(getSelectedCity);

  const mapRef = useRef<google.maps.Map | null>(null);

  const handleLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const handleBoundsChanged = useCallback(() => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds();
      const filteredLocations = getFilteredLocations(
        bounds as google.maps.LatLngBounds
      );
      dispatch(setLocations(filteredLocations));
    }
  }, []);

  const handleMarkerClick = (location: ILocation) => {
    dispatch(setSelectedLocation(location));
    const element = document.getElementById(location.id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <GoogleMap
        onLoad={handleLoad}
        zoom={10}
        center={selectedCity as MapCoordinates}
        mapContainerStyle={{ height: '100%' }}
        clickableIcons={false}
        onBoundsChanged={handleBoundsChanged}
      >
        <Markers onMarkerClick={handleMarkerClick} />
      </GoogleMap>
    </>
  );
}

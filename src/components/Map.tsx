import { useCallback, useRef } from 'react';
import ILocation, { MapCoordinates } from '../interfaces/ILocation';
import { GoogleMap } from '@react-google-maps/api';
import Markers from './Markers';
import { getFilteredLocations } from '../utils/helpers';

export default function Map({
  onLocations,
  selectedCity,
  selectedLocation,
  onSelectedLocation,
}: {
  onLocations: Function;
  selectedCity: MapCoordinates | null;
  selectedLocation: ILocation | null;
  onSelectedLocation: Function;
}) {
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
      onLocations(filteredLocations);
    }
  }, []);

  const handleMarkerClick = (location: ILocation) => {
    onSelectedLocation(location);
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
        <Markers
          selectedLocation={selectedLocation}
          onMarkerClick={handleMarkerClick}
        />
      </GoogleMap>
    </>
  );
}

import React, { useEffect } from 'react';
import ILocation from '../interfaces/ILocation';
import { Map, useMap } from '@vis.gl/react-google-maps';
import Markers from './Markers';

function MapBox({
  selectedLocation,
  onSelectedLocation,
}: {
  selectedLocation: ILocation;
  onSelectedLocation: Function;
}) {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.setCenter({
        lat: selectedLocation.coordinates.lat,
        lng: selectedLocation.coordinates.lng,
      });
    } else {
      return;
    }
  }, [map, selectedLocation]);

  const mapCenter = {
    lat: selectedLocation.coordinates.lat,
    lng: selectedLocation.coordinates.lng,
  };

  const handleMarkerClick = (location: ILocation) => {
    onSelectedLocation(location);
    const element = document.getElementById(location.id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Map
      defaultZoom={10}
      defaultCenter={mapCenter}
      mapId={import.meta.env.VITE_MAP_ID}
      style={{ height: '100%' }}
    >
      <Markers
        selectedLocation={selectedLocation}
        onMarkerClick={handleMarkerClick}
      />
    </Map>
  );
}

export default React.memo(MapBox);

import React, { useEffect } from 'react';
import ILocation from '../interfaces/ILocation';
import { Map, useMap } from '@vis.gl/react-google-maps';
import Markers from './Markers';
import '../styles/map-box.css';

function MapBox({
  selectedLocation,
  onSelectedLocation,
}: {
  selectedLocation: ILocation;
  onSelectedLocation: Function;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (map && selectedLocation) {
      map.setCenter({
        lat: selectedLocation.coordinates.lat,
        lng: selectedLocation.coordinates.lng,
      });
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
    // <div className='map-box'>
    <Map
      defaultZoom={10}
      defaultCenter={mapCenter}
      mapId={import.meta.env.VITE_MAP_ID}
      className='map-box'
    >
      <Markers
        selectedLocation={selectedLocation}
        onMarkerClick={handleMarkerClick}
      />
    </Map>
    // </div>
  );
}

export default React.memo(MapBox);

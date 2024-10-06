import ILocation from '../interfaces/ILocation';
import { MarkerClusterer, MarkerF } from '@react-google-maps/api';
import { locations } from '../data/constants/locations';

export default function Markers({
  selectedLocation,
  onMarkerClick,
}: {
  selectedLocation: ILocation | null;
  onMarkerClick: (location: ILocation) => void;
}) {
  return (
    <MarkerClusterer>
      {() => (
        <>
          {locations.map((location) => {
            const isSelected = location.id === selectedLocation?.id;

            return (
              <MarkerF
                key={`marker-${location.id}`}
                position={{
                  lat: location.coordinates.lat,
                  lng: location.coordinates.lng,
                }}
                icon={
                  isSelected
                    ? '/icons/blue-marker.svg'
                    : '/icons/red-marker.svg'
                }
                onClick={() => onMarkerClick(location)}
              />
            );
          })}
        </>
      )}
    </MarkerClusterer>
  );
}

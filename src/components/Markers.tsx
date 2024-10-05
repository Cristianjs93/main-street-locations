import { locations } from '../data/constants/locations';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import ILocation from '../interfaces/ILocation';

export default function Markers({
  selectedLocation,
  onMarkerClick,
}: {
  selectedLocation: ILocation;
  onMarkerClick: (location: ILocation) => void;
}) {
  return (
    <>
      {locations.map((location) => {
        const isSelected = location.id === selectedLocation.id;
        return (
          <AdvancedMarker
            key={`marker-${location.id}`}
            position={{
              lat: location.coordinates.lat,
              lng: location.coordinates.lng,
            }}
            onClick={() => onMarkerClick(location)}
          >
            <Pin
              background={isSelected ? '#074174' : '#ea4335'}
              glyphColor={isSelected ? '#ffffff' : '#b31412'}
              borderColor={isSelected ? '#ffffff' : '#b31412'}
            />
          </AdvancedMarker>
        );
      })}
    </>
  );
}

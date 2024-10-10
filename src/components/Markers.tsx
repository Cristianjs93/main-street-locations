import { useAppSelector } from '../redux/hooks';
import { getSelectedLocation } from '../redux/slices/locations';
import ILocation from '../interfaces/ILocation';
import { MarkerClusterer, MarkerF } from '@react-google-maps/api';
import { locationsData } from '../data/constants/locationsData';

export default function Markers({
  onMarkerClick,
}: {
  onMarkerClick: (location: ILocation) => void;
}) {
  const selectedLocation = useAppSelector(getSelectedLocation);

  return (
    <MarkerClusterer>
      {() => (
        <>
          {locationsData.map((location) => {
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

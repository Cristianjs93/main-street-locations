import { locations } from '../data/constants/locations';
import Card from './Card';
import ILocation from '../interfaces/ILocation';

export default function Locations({
  selectedLocation,
  onSelectedLocation,
  search,
}: {
  selectedLocation: ILocation;
  onSelectedLocation: Function;
  search: string;
}) {
  return (
    <>
      {locations
        .filter((location) => location.name.toLowerCase().includes(search))
        .map((location) => (
          <Card
            key={`card-${location.id}`}
            location={location}
            selectedLocation={selectedLocation}
            onSelectedLocation={onSelectedLocation}
          />
        ))}
    </>
  );
}

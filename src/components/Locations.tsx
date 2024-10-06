import ILocation from '../interfaces/ILocation';
import Card from './Card';

export default function Locations({
  locations,
  selectedLocation,
  onSelectedLocation,
}: {
  locations: ILocation[];
  selectedLocation: ILocation | null;
  onSelectedLocation: Function;
}) {
  return (
    <>
      {!locations.length ? (
        <h2>No locations were found. Please try a different search</h2>
      ) : (
        locations.map((location) => (
          <Card
            key={`card-${location.id}`}
            location={location}
            selectedLocation={selectedLocation}
            onSelectedLocation={onSelectedLocation}
          />
        ))
      )}
    </>
  );
}

import { useAppSelector } from '../redux/hooks';
import { getLocations } from '../redux/slices/locations';
import Card from './Card';

export default function Locations() {
  const locations = useAppSelector(getLocations);

  return (
    <>
      {!locations.length ? (
        <h2>No locations were found. Please try a different search</h2>
      ) : (
        locations.map((location) => (
          <Card key={`card-${location.id}`} location={location} />
        ))
      )}
    </>
  );
}

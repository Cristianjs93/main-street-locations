import ILocation from '../interfaces/ILocation';
import '../styles/card.css';

export default function Card({
  location,
  selectedLocation,
  onSelectedLocation,
}: {
  location: ILocation;
  selectedLocation: ILocation | null;
  onSelectedLocation: Function;
}) {
  const isSelected = selectedLocation?.id === location.id;
  const separationIndex = location.address.indexOf(',');

  return (
    <>
      <article
        key={location.id}
        id={location.id}
        className={isSelected ? 'card card-selected' : 'card'}
        onClick={() => onSelectedLocation(location)}
      >
        <h2 className='card-title'>{location.name}</h2>
        <p>
          {location.address.slice(0, separationIndex)}
          <br />
          {location.address.slice(separationIndex + 1)}
        </p>
        <span className='rating'>⭐{location.rating ?? '0'}</span>
      </article>
    </>
  );
}

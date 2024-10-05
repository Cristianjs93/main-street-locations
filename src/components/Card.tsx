import ILocation from '../interfaces/ILocation';
import '../styles/card.css';

export default function Card({
  location,
  selectedLocation,
  onSelectedLocation,
}: {
  location: ILocation;
  selectedLocation: ILocation;
  onSelectedLocation: Function;
}) {
  const isSelected = selectedLocation.id === location.id;

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
          {location.address.slice(0, location.address.indexOf(',')).trim()}
          <br />
          {location.address.slice(location.address.indexOf(',') + 1).trim()}
        </p>
        <span className='rating'>
          ⭐{location.rating ? location.rating : '0'}
        </span>
      </article>
    </>
  );
}

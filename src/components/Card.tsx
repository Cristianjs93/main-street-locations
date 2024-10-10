import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  getSelectedLocation,
  setSelectedLocation,
} from '../redux/slices/locations';
import ILocation from '../interfaces/ILocation';
import '../styles/card.css';

export default function Card({ location }: { location: ILocation }) {
  const dispatch = useAppDispatch();

  const selectedLocation = useAppSelector(getSelectedLocation);

  const isSelected = selectedLocation?.id === location.id;
  const separationIndex = location.address.indexOf(',');

  return (
    <>
      <article
        key={location.id}
        id={location.id}
        className={isSelected ? 'card card-selected' : 'card'}
        onClick={() => dispatch(setSelectedLocation(location))}
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

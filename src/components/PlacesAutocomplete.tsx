import { ChangeEvent, useRef } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import ClearButton from './ClearButton';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import '../styles/places-autocomplete.css';

export default function PlacesAutocomplete({
  onSelectedCity,
  onLoading,
}: {
  onSelectedCity: Function;
  onLoading: Function;
}) {
  const inputRef = useRef<google.maps.places.SearchBox | null>(null);

  const { ready, value, setValue } = usePlacesAutocomplete();

  const handlePlacesChange = async () => {
    onLoading(true);
    const places = inputRef?.current?.getPlaces();
    if (places) {
      const { formatted_address } = places[0];
      setValue(String(formatted_address));
      const [geoCode] = await getGeocode({
        address: formatted_address,
      });
      const coordinates = getLatLng(geoCode);
      onSelectedCity(coordinates);
    }
    onLoading(false);
  };

  const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='autocomplete-container'>
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlacesChange}
      >
        <input
          type='text'
          className='autocomplete-input'
          value={value}
          placeholder='Search by zip, city or state'
          onChange={handleInputchange}
          disabled={!ready}
        />
      </StandaloneSearchBox>
      {value.length >= 1 && <ClearButton setValue={setValue} />}
    </div>
  );
}

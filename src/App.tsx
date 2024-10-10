import { useState } from 'react';
import { useAppSelector } from './redux/hooks.ts';
import { getSelectedCity } from './redux/slices/locations.ts';
import PlacesWrapper from './components/PlacesWrapper.tsx';
import PlacesAutocomplete from './components/PlacesAutocomplete.tsx';
import EmptyView from './components/EmptyView.tsx';
import Locations from './components/Locations.tsx';
import Map from './components/Map.tsx';
import './styles/app.css';

export default function App() {
  const [loading, setLoading] = useState(false);

  const selectedCity = useAppSelector(getSelectedCity);

  return (
    <PlacesWrapper>
      <main className='main-container'>
        <header className='header'>
          <PlacesAutocomplete onLoading={setLoading} />
        </header>
        <div className='content'>
          {!selectedCity ? (
            <EmptyView isLoading={loading} />
          ) : (
            <>
              <section className='locations-container'>
                <Locations />
              </section>
              <section className='map-container'>
                <Map />
              </section>
            </>
          )}
        </div>
      </main>
    </PlacesWrapper>
  );
}

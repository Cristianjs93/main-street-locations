import { useState } from 'react';
import ILocation, { MapCoordinates } from './interfaces/ILocation.ts';
import PlacesWrapper from './components/PlacesWrapper.tsx';
import PlacesAutocomplete from './components/PlacesAutocomplete.tsx';
import EmptyView from './components/EmptyView.tsx';
import Locations from './components/Locations.tsx';
import Map from './components/Map.tsx';
import './styles/app.css';

export default function App() {
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [selectedCity, setSelectedCity] = useState<MapCoordinates | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  return (
    <PlacesWrapper>
      <main className='main-container'>
        <header className='header'>
          <PlacesAutocomplete
            onSelectedCity={setSelectedCity}
            onLoading={setLoading}
          />
        </header>
        <div className='content'>
          {!selectedCity ? (
            <EmptyView isLoading={loading} />
          ) : (
            <>
              <section className='locations-container'>
                <Locations
                  locations={locations}
                  selectedLocation={selectedLocation}
                  onSelectedLocation={setSelectedLocation}
                />
              </section>
              <section className='map-container'>
                <Map
                  onLocations={setLocations}
                  selectedCity={selectedCity}
                  selectedLocation={selectedLocation}
                  onSelectedLocation={setSelectedLocation}
                />
              </section>
            </>
          )}
        </div>
      </main>
    </PlacesWrapper>
  );
}

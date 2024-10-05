import { useState } from 'react';
import ILocation from './interfaces/ILocation.ts';
import Search from './components/Search.tsx';
import Locations from './components/Locations.tsx';
import MapBox from './components/MapBox.tsx';
import { locations } from './data/constants/locations.ts';
import './styles/app.css';

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<ILocation>(
    locations[0]
  );
  const [search, setSearch] = useState('');

  return (
    <main className='main-container'>
      <header className='header'>
        <Search search={search} onSearch={setSearch} />
      </header>
      <div className='content'>
        <section className='locations-container'>
          <Locations
            search={search}
            selectedLocation={selectedLocation}
            onSelectedLocation={setSelectedLocation}
          />
        </section>
        <section className='map-container'>
          <MapBox
            selectedLocation={selectedLocation}
            onSelectedLocation={setSelectedLocation}
          />
        </section>
      </div>
    </main>
  );
}

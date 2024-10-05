import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { APIProvider } from '@vis.gl/react-google-maps';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_MAP_API_KEY}>
      <App />
    </APIProvider>
  </StrictMode>
);

import { ReactElement } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { libraries } from '../data/constants/libraries';

export default function PlacesWrapper({
  children,
}: {
  children: ReactElement;
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <></>;

  return children;
}

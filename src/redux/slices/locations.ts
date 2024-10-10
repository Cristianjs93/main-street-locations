import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import ILocation, { MapCoordinates } from '../../interfaces/ILocation';

interface LocationState {
  locations: ILocation[];
  selectedLocation: ILocation | null;
  selectedCity: MapCoordinates | null;
}

export const initialState: LocationState = {
  locations: [],
  selectedLocation: null,
  selectedCity: null,
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<ILocation[]>) => {
      return { ...state, locations: action.payload };
    },
    setSelectedLocation: (state, action: PayloadAction<ILocation>) => {
      return { ...state, selectedLocation: action.payload };
    },
    setSelectedCity: (state, action: PayloadAction<MapCoordinates>) => {
      return { ...state, selectedCity: action.payload };
    },
  },
});

export const { setLocations, setSelectedLocation, setSelectedCity } =
  locationsSlice.actions;

export const getLocations = (state: RootState) => state.locations.locations;

export const getSelectedLocation = (state: RootState) =>
  state.locations.selectedLocation;

export const getSelectedCity = (state: RootState) =>
  state.locations.selectedCity;

export default locationsSlice.reducer;

export default interface ILocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  rating?: number;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

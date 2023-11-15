export type Position = {
  lat: number;
  lng: number;
};

export type CityData = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
  id: number;
};

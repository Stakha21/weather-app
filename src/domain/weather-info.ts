import { JsonValue } from '../helpers/json-types';

export type WeatherInfo = {
  id: number;
  lat: string;
  lon: string;
  part: string;
  weatherInfo: JsonValue;
  createdAt: Date;
  updatedAt: Date;
};

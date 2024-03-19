import { WeatherInfo } from '../domain/weather-info';

export type CreateWeatherInfoParameters = Pick<
  WeatherInfo,
  'lat' | 'lon' | 'part' | 'weatherInfo'
>;

export type GetWeatherInfoParameters = Pick<
  WeatherInfo,
  'lat' | 'lon' | 'part'
>;

export interface IWeatherInfoRepository {
  create(parameters: CreateWeatherInfoParameters): Promise<WeatherInfo | Error>;

  get(parameters: GetWeatherInfoParameters): Promise<WeatherInfo | Error>;
}

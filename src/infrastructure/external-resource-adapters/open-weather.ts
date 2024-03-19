import { WeatherInfoDto } from '../../modules/weather-info/dto/weather-info.dto';
import { JsonValue } from '../../helpers/json-types';
import { ErrorType } from '../../enums/error-types';
import config from '../config/index';

export type OpenWeather = {
  weatherInfo: JsonValue;
};

export const getWeatherInfo = async (
  weatherInfoDto: WeatherInfoDto,
): Promise<OpenWeather | Error> => {
  try {
    const openWeatherUrl = new URL(
      'https://api.openweathermap.org/data/2.5/weather',
    );

    const parameters = {
      lat: weatherInfoDto.lat,
      lon: weatherInfoDto.lon,
      exclude: weatherInfoDto.part,
      appid: config().openWeather.key,
    };

    openWeatherUrl.search = new URLSearchParams(parameters).toString();

    const response = await fetch(openWeatherUrl);

    if (!response.ok) {
      return new Error(ErrorType.UNEXPECTED_BEHAVIOR);
    }

    const json = await response.json();

    return {
      weatherInfo: json,
    };
  } catch (error) {
    return new Error(ErrorType.UNEXPECTED_BEHAVIOR);
  }
};

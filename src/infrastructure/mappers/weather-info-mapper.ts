import { WeatherInfoModel } from '../models/weather-info.model';
import { WeatherInfo } from '../../domain/weather-info';

export function toDomainWeatherInfo(
  sequelizeModel: WeatherInfoModel,
): WeatherInfo {
  return {
    id: sequelizeModel.id,
    lat: sequelizeModel.lat,
    lon: sequelizeModel.lon,
    part: sequelizeModel.part,
    weatherInfo: sequelizeModel.weatherInfo,
    createdAt: sequelizeModel.createdAt,
    updatedAt: sequelizeModel.updatedAt,
  };
}

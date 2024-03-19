import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WeatherInfoModel } from '../models/weather-info.model';
import {
  CreateWeatherInfoParameters,
  GetWeatherInfoParameters,
  IWeatherInfoRepository,
} from '../../port/weather-info.repository.port';
import { ErrorType } from '../../enums/error-types';
import { toDomainWeatherInfo } from '../mappers/weather-info-mapper';
import { WeatherInfo } from '../../domain/weather-info';

@Injectable()
export class WeatherInfoRepository implements IWeatherInfoRepository {
  constructor(
    @InjectModel(WeatherInfoModel)
    private readonly weatherInfoModel: typeof WeatherInfoModel,
  ) {}

  async create(
    parameters: CreateWeatherInfoParameters,
  ): Promise<WeatherInfo | Error> {
    try {
      const sequelizeWeatherInfo = await this.weatherInfoModel.create({
        lat: parameters.lat,
        lon: parameters.lon,
        part: parameters.part,
        weatherInfo: parameters.weatherInfo,
      });

      return toDomainWeatherInfo(sequelizeWeatherInfo);
    } catch (error) {
      return new Error(ErrorType.UNEXPECTED_BEHAVIOR);
    }
  }

  async get(
    parameters: GetWeatherInfoParameters,
  ): Promise<WeatherInfo | Error> {
    try {
      const sequelizeWeatherInfo = await this.weatherInfoModel.findOne({
        where: {
          lat: parameters.lat,
          lon: parameters.lon,
          part: parameters.part,
        },
      });

      return toDomainWeatherInfo(sequelizeWeatherInfo);
    } catch (error) {
      return new Error(ErrorType.UNEXPECTED_BEHAVIOR);
    }
  }
}

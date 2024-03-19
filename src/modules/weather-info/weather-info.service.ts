import { Injectable } from '@nestjs/common';
import { WeatherInfoDto } from './dto/weather-info.dto';
import { ErrorType } from '../../enums/error-types';
import { WeatherInfoRepository } from '../../infrastructure/repository/weather-info.repository';
import { WeatherInfo } from '../../domain/weather-info';
import { getWeatherInfo } from '../../infrastructure/external-resource-adapters/open-weather';

@Injectable()
export class WeatherInfoService {
  constructor(private readonly weatherInfoRepository: WeatherInfoRepository) {}

  async create(weatherInfoDto: WeatherInfoDto): Promise<WeatherInfo | Error> {
    const openWeather = await getWeatherInfo(weatherInfoDto);

    if (openWeather instanceof Error) {
      return new Error(ErrorType.UNEXPECTED_BEHAVIOR);
    }

    return this.weatherInfoRepository.create({
      ...weatherInfoDto,
      weatherInfo: openWeather.weatherInfo,
    });
  }

  async get(weatherInfoDto: WeatherInfoDto): Promise<WeatherInfo | Error> {
    return this.weatherInfoRepository.get(weatherInfoDto);
  }
}

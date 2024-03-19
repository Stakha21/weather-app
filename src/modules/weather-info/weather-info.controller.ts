import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { WeatherInfoDto } from './dto/weather-info.dto';
import { WeatherInfoService } from './weather-info.service';
import { response } from 'express';
import { TransformInterceptor } from '../../infrastructure/transform.interceptor';

@Controller({ path: 'weather', version: '1' })
export class WeatherInfoController {
  constructor(private readonly weatherInfoService: WeatherInfoService) {}

  @Post()
  async create(@Body() weatherInfoDto: WeatherInfoDto) {
    const weatherInfo = await this.weatherInfoService.create(weatherInfoDto);

    if (weatherInfo instanceof Error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }

    return 'Weather Info created!';
  }

  @UseInterceptors(TransformInterceptor)
  @Get()
  async get(@Query() query: WeatherInfoDto) {
    const weatherInfo = await this.weatherInfoService.get(query);

    if (weatherInfo instanceof Error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }

    return weatherInfo;
  }
}

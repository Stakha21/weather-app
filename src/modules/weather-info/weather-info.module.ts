import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WeatherInfoService } from './weather-info.service';
import { WeatherInfoModel } from '../../infrastructure/models/weather-info.model';
import { WeatherInfoRepository } from '../../infrastructure/repository/weather-info.repository';
import { WeatherInfoController } from './weather-info.controller';

@Module({
  imports: [SequelizeModule.forFeature([WeatherInfoModel])],
  exports: [SequelizeModule],
  providers: [WeatherInfoService, WeatherInfoRepository],
  controllers: [WeatherInfoController],
})
export class WeatherInfoModule {}

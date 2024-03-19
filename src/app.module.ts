import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import config from './infrastructure/config/index';
import { WeatherInfoModule } from './modules/weather-info/weather-info.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.name,
      autoLoadModels: true,
      synchronize: true,
    }),
    WeatherInfoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

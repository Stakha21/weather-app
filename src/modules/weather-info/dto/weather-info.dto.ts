import { IsNotEmpty } from 'class-validator';

export class WeatherInfoDto {
  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  lon: string;

  @IsNotEmpty()
  part: string;
}

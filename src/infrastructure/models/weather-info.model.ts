import {
  Column,
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { JsonValue } from '../../helpers/json-types';

@Table
export class WeatherInfoModel extends Model<WeatherInfoModel> {
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @PrimaryKey
  @Column({
    allowNull: false,
  })
  lat: string;

  @PrimaryKey
  @Column({
    allowNull: false,
  })
  lon: string;

  @PrimaryKey
  @Column({
    allowNull: false,
  })
  part: string;

  @Column(DataType.JSON)
  weatherInfo: JsonValue;
}

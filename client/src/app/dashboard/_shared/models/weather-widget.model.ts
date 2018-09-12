import { IconsModel } from './icons.model';
import * as _ from 'lodash';

export class WeatherWidget {
  constructor(public id: number,
              public cityName: string,
              public cityId: number,
              public temperature: number,
              public weatherId: number) {
  }

  getCityName() {
    return this.cityName;
  }

  getTemperature() {
    return _.round(this.temperature);
  }

  getId() {
    return this.id;
  }

  getCityId() {
    return this.cityId;
  }

  getIcon() {
    return IconsModel.getClass(this.weatherId);
  }
}

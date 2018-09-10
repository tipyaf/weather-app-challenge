import { Injectable } from '@angular/core';
import { UserSettingsService } from '../../../_shared/services/user-settings.service';
import { OpenWeatherMapService } from '../../../_shared/services/open-weather-map.service';
import { WeatherWidget } from '../../../_shared/models/weather-widget.model';
import { throwError } from 'rxjs';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  settingsList: any = [];
  weatherList: any = [];
  weatherWidgetList: any = [];

  constructor(private userSettingsService: UserSettingsService,
              private openWeatherMapService: OpenWeatherMapService
  ) {
  }


  //////////
  // Datas

  getSettings() {
    return this.userSettingsService.getWidgetsByType('weatherWidgets');
  }

  getWeatherList() {
    const idsList = _.map(this.settingsList, 'owmId');
    return this.openWeatherMapService.getByGroup(idsList)
      .then(data => data.list);
  }

  ///////////
  // Widgets

  async getWeatherWidgets(isForceRefresh?: boolean): Promise<WeatherWidget[]> {
    if (_.isEmpty(this.weatherWidgetList) || isForceRefresh) { // if it not cached load data
      await this.loadData();
      this.createWidgetList();
    }
    return this.weatherWidgetList;
  }

  async loadData() {
    this.settingsList = await this.getSettings() // get settings
      .catch((error) => {
        return throwError(error);
      });

    this.weatherList = await this.getWeatherList() // get weather
      .catch((error) => {
        return throwError(error);
      });
  }

  ////////
  // manage widget data

  addWidget(widget: WeatherWidget) {
    this.weatherWidgetList.push(widget);
  }

  createWidgetList() {
    _.forEach(this.settingsList, (widget) => {
      const weather = _.filter(this.weatherList, {id: widget.owmId}); // matched widget and weather by id
      const newWidget = this.newWidgetModel(widget, weather[0]); // create model
      this.addWidget(newWidget); // addWidget to list
    });
  }

  newWidgetModel(widget, weather) {
    return new WeatherWidget(
      widget.id,
      weather.name,
      weather.id,
      weather.main.temp,
      weather.weather[0].id);
  }

}

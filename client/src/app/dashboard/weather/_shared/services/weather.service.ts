import { Injectable } from '@angular/core';
import { OpenWeatherMapService } from '../../../_shared/services/open-weather-map.service';
import { WeatherWidget } from '../../../_shared/models/weather-widget.model';
import { DashboardSettingsService } from '../../../_shared/services/dashboard-settings.service';
import { throwError } from 'rxjs';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  settingsList: any = [];
  weatherList: any = [];
  weatherWidgetList: any = [];

  constructor(private dashboardSettingsService: DashboardSettingsService,
              private openWeatherMapService: OpenWeatherMapService) {
  }

  //////////
  // Data

  async loadData() {
    this.settingsList = await this.getSettings() // get settings
      .catch((error) => {
        return throwError(error);
      });

    if (!_.isEmpty(this.settingsList)) {
      // if settings list is empty (because no settings added for the first time of user on app) don't call openWeatherApi
      this.weatherList = await this.getWeatherList() // get weather
        .catch((error) => {
          return throwError(error);
        });
    } else {
      return [];
    }
  }

  getSettings() {
    return this.dashboardSettingsService.getWidgetsByType('weatherWidgets');
  }

  getWeatherList() {
    const idsList = _.map(this.settingsList, 'owmId');
    return this.openWeatherMapService.getByGroup(idsList)
      .then(settings => settings.list);
  }


  ///////////
  // Widgets

  async getWeatherWidgets(isForceRefresh?: boolean): Promise<WeatherWidget[]> {
    if (_.isEmpty(this.weatherWidgetList) || isForceRefresh) { // if it not cached ...
      await this.loadData();
      this.createWidgetList();
    }
    return this.weatherWidgetList;
  }

  hasWidgetByCityId(id) {
    return _.some(this.weatherWidgetList, {cityId: id});
  }



  ////////
  // Manage widget data

  addWidget(widget: WeatherWidget) {
    this.weatherWidgetList.push(widget);
  }

  removeWidgetById(id) {
    this.weatherWidgetList = _.filter(this.weatherWidgetList, (widget) => {
      return widget.id !== id;
    });
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

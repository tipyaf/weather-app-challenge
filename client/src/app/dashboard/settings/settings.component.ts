import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from '../weather/_shared/services/weather.service';
import { MatSnackBar } from '@angular/material';
import { OpenWeatherMapService } from '../_shared/services/open-weather-map.service';
import { DashboardSettingsService } from '../_shared/services/dashboard-settings.service';

import * as _ from 'lodash';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  addForm: FormGroup;
  widgetsList: any = [];
  widgetSearch: string = null;


  constructor(private weatherService: WeatherService,
              private spinner: NgxSpinnerService,
              private snackBar: MatSnackBar,
              private openWeatherMapService: OpenWeatherMapService,
              private dashboardSettingsService: DashboardSettingsService) {
  }

  //////////////

  ngOnInit() {
    this.setForm();
    this.getWidgetList();
  }

  /////////////
  // Widgets

  getWidgetList() {
    this.startLoading();
    this.weatherService.getWeatherWidgets()
      .then(widgetsList => {
        this.onGetWidgetListSuccess(widgetsList);
      })
      .catch(() => {
        this.onGetWidgetListError();
      });
  }

  ////////

  onGetWidgetListSuccess(widgetsList) {
    this.widgetsList = widgetsList;
    this.stopLoading();
  }

  onGetWidgetListError() {
    this.snackBar.open('Error. Widgets not loading.', 'X', {duration: 4000});
    this.stopLoading();
  }

  /////////////
  // Settings actions

  addWidget() {
    this.startLoading();
    this.getWeatherSearch()
      .then(cityWeather => {
        const isNotAlreadyAdded = !this.weatherService.hasWidgetByCityId(cityWeather.id);

        if (isNotAlreadyAdded) {
          this.addWidgetToSettings(cityWeather);
          this.onActionFinished('Widget added !');
        } else {
          this.onActionFinished('Widget already added !');
        }
      })
      .catch((error) => {
        this.onActionFinished('City not found.');
        return throwError(error);
      });
  }

  removeWidget(type: string, id: number) {
    this.startLoading();
    this.dashboardSettingsService.removeWidget(type, id)
      .then(() => {
        this.widgetsList = _.filter(this.widgetsList, (widget) => {
          return widget.id !== id;
        });
        this.weatherService.removeWidgetById(id); // remove from weather
        this.onActionFinished('Removed !');
        this.stopLoading();
      })
      .catch(() => {
        this.onActionFinished('Not removed !');
      });
  }

  /////////

  onActionFinished(message: string) {
    this.snackBar.open(message, 'X', {duration: 2000});
    this.resetForm();
    this.stopLoading();
  }

  /////////////
  // Data

  getWeatherSearch() {
    const cityName = _.toLower(this.addForm.value.search);
    return this.openWeatherMapService.getByCityName(cityName);
  }

  addWidgetToSettings(cityWeather) {
    this.dashboardSettingsService.addWidget('weatherWidgets', cityWeather.id) // add to dashboard settings db
      .then((widgetSettings) => {
        const newWidget = this.weatherService.newWidgetModel(widgetSettings, cityWeather);
        this.weatherService.addWidget(newWidget);
      })
      .catch(error => {
        return throwError(error);
      });
  }

  /////////////
  // Form

  setForm() {
    this.addForm = new FormGroup({
      search: new FormControl('', [Validators.required])
    });
  }

  resetForm() {
    this.addForm.reset();
  }

  ////////
  // Loader

  startLoading() {
    this.spinner.show();
  }

  stopLoading() {
    this.spinner.hide();
  }
}

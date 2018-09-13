import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from './_shared/services/weather.service';
import { MatSnackBar } from '@angular/material';
import * as _ from 'lodash';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  widgetsList: any = [];

  constructor(private weatherService: WeatherService,
              private snackBar: MatSnackBar,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  ///////////

  ngOnInit() {
    this.getWeatherWidgetsList();
  }

  ////////////
  // Widgets

  getWeatherWidgetsList() {
    this.startLoading();
    return this.weatherService.getWeatherWidgets()
      .then(widgetsList => {
        this.onSuccess(widgetsList);
      })
      .catch(() => {
        this.onError();
      });
  }

  //////

  onSuccess(widgetsList) {
    this.widgetsList = widgetsList;
    this.stopLoading();
    this.checkFirstAppRun(widgetsList);
  }

  onError() {
    this.snackBar.open('Error. Widgets not loading.', 'X', {duration: 4000});
    this.stopLoading();
  }

  ////////////

  checkFirstAppRun(widgetsList) {
    if (_.isEmpty(widgetsList)) { // if no widget added yet (First run of app
      this.snackBar.open('Welcome to Weather App ! We redirect you to add one or any new widgets', 'X', {duration: 6000});

      setTimeout(() => {
        this.startLoading();
      }, 4000);

      setTimeout(() => {
        this.redirectTo('dashboard/settings');
        this.stopLoading();
      }, 6500);
    }
  }

  ////////////

  redirectTo(page) {
    this.router.navigate([page]);
  }

  ////////////
  // Loader

  startLoading() {
    this.spinner.show();
  }

  stopLoading() {
    this.spinner.hide();
  }

}

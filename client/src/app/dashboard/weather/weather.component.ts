import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from './_shared/services/weather.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  widgetList: any = [];

  constructor(private weatherService: WeatherService,
              private snackBar: MatSnackBar,
              private spinner: NgxSpinnerService) {
  }

  ///////////

  ngOnInit() {
    this.getWeatherWidgetsList();
  }

  ///////////


  getWeatherWidgetsList() {
    this.startLoading();
    return this.weatherService.getWeatherWidgets()
      .then(widgetList => {
        this.onSucess(widgetList);
      })
      .catch(() => {
        this.onError();
      });
  }

  ////////

  onSucess(widgetList) {
    this.widgetList = widgetList;
    this.stopLoading();
  }

  onError() {
    this.snackBar.open('Error. Widgets not loading.', 'X', {duration: 4000});
    this.stopLoading();
  }

  ///////

  startLoading() {
    this.spinner.show();
  }

  stopLoading() {
    this.spinner.hide();
  }

}

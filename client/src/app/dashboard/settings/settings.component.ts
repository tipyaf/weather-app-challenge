import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from '../weather/_shared/services/weather.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  addForm: FormGroup;
  widgetsList: any = [];


  constructor(private weatherService: WeatherService,
              private spinner: NgxSpinnerService,
              private snackBar: MatSnackBar,
  ) {
  }

  //////////////

  ngOnInit() {
    this.setForm();
    this.getWidgetList();
  }

  /////////////

  setForm() {
    this.addForm = new FormGroup({
      search: new FormControl('', [Validators.required])
    });
  }


  getWidgetList() {
    this.startLoading();
    this.weatherService.getWeatherList()
      .then(widgetList => {
        this.widgetsList = widgetList;
        this.stopLoading();
      })
      .catch(() => {
        this.snackBar.open('Error. Widgets not loading.', 'X', {duration: 4000});
        this.stopLoading();
      });
  }

  ////////

  startLoading() {
    this.spinner.show();
  }

  stopLoading() {
    this.spinner.hide();
  }
}

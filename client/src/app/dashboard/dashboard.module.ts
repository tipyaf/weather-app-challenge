import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRouterModule } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../_shared/modules/material/material.module';
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';
import { WidgetComponent } from './weather/_shared/components/widget/widget.component';

// services
import { OpenWeatherMapService } from './_shared/services/open-weather-map.service';
import { UserSettingsService } from './_shared/services/user-settings.service';


@NgModule({
  declarations: [
    DashboardComponent,
    WeatherComponent,
    SettingsComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRouterModule,
    MaterialModule
  ],
  providers: [
    UserSettingsService,
    OpenWeatherMapService
  ]
})
export class DashboardModule { }

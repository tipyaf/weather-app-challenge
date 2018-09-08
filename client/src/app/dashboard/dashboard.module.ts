import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouterModule } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../_shared/modules/material/material.module';
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WeatherComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRouterModule,
    MaterialModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { DashboardRouterModule } from './dashboard.routes';
import { MaterialModule } from '../_shared/modules/material/material.module';

// Components
import { DashboardComponent } from './dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';
import { WidgetComponent } from './weather/widget/widget.component';

// Pipes
import { PipeModule } from '../_shared/modules/pipe/pipe.module';


// Services
import { OpenWeatherMapService } from './_shared/services/open-weather-map.service';
import { DashboardSettingsService } from './_shared/services/dashboard-settings.service';




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
    MaterialModule,
    PipeModule
  ],
  providers: [
    DashboardSettingsService,
    OpenWeatherMapService
  ]
})
export class DashboardModule { }

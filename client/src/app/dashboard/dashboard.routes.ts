import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';



const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'weather', pathMatch: 'full'},
      {
        path: 'weather',
        component: WeatherComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

export const DashboardRouterModule = RouterModule.forRoot(dashboardRoutes);

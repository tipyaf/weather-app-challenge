import {Routes, RouterModule} from '@angular/router';



const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard/weather', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},

  // otherwise redirect to dashboard
  {path: '**', redirectTo: '/dashboard/weather'}
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);

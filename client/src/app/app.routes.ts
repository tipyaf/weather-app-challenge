import {Routes, RouterModule} from '@angular/router';



const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},

  // otherwise redirect to home
  {path: '**', redirectTo: '/dashboard'}
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);

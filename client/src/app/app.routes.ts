import {Routes, RouterModule} from '@angular/router';



const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {path: 'dashboard', component: FaqComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: '/dashboard'}
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);

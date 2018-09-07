import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRouterModule } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

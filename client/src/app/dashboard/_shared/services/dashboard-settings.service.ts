import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { WeatherWidget } from '../models/weather-widget.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardSettingsService {

  constructor(private http: HttpClient) {
  }

  getUrlBase() {
    return environment.apis.server.urlBase;
  }

  getWidgetsByType(type: string) {
    const urlBase = this.getUrlBase();
    const url = `${urlBase}/${type}`; // currently type = 'weatherWidgets'
    return this.http.get<any>(url)
      .toPromise();
  }

  addWidget(type, weatherCityId: number) {
    const urlBase = this.getUrlBase();
    const url = `${urlBase}/${type}`; // currently type = 'weatherWidgets'
    return this.http.post<any>(url, {id: null, owmId: weatherCityId})
      .toPromise();
  }

  removeWidget(type, id: number) {
    const urlBase = this.getUrlBase();
    const url = `${urlBase}/${type}/${id}`; // currently type = 'weatherWidgets'
    return this.http.delete<WeatherWidget>(url)
      .toPromise();
  }
}

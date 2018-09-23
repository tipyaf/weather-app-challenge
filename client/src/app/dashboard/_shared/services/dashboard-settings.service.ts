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

  getWidgetsByType(type: string) {
    const url = `/api/widgets/${type}`; // currently type = 'weatherWidgets'
    return this.http.get<any>(url)
      .toPromise();
  }

  addWidget(type, weatherCityId: number) {
    const url = `/api/widgets/${type}`; // currently type = 'weatherWidgets'
    return this.http.post<any>(url, {owmId: weatherCityId})
      .toPromise();
  }

  removeWidget(type, id: string) {
    const url = `/api/widget/${type}/${id}`; // currently type = 'weatherWidgets'
    return this.http.delete<WeatherWidget>(url)
      .toPromise();
  }
}

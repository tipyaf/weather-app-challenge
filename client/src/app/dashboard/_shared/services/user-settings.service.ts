import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

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

  addWidget(type, id: string): Observable<any> {
    const urlBase = this.getUrlBase();
    const url = `${urlBase}/${type}`; // currently type = 'weatherWidgets'
    return this.http.post<any>(url, id);
  }
}

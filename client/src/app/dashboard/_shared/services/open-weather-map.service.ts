import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  constructor(private http: HttpClient) {
  }

  getKey() {
    return environment.apis.owm.key;
  }

  getUrlBase() {
    return environment.apis.owm.urlBase;
  }

  getByCityName(cityName: string) {
    const params = new HttpParams()
      .set('APPID', this.getKey())
      .set('q', cityName)
      .set('units', 'metrics');
    const url = `${this.getUrlBase()}/weather`;

    return this.http.get<any>(url, {params});
  }

  getByGroup(idsList) {
    const concatIdsList = _.join(idsList, ',');
    const params = new HttpParams()
      .set('id', concatIdsList)
      .set('units', 'metric')
      .set('APPID', this.getKey());

    const url = `${this.getUrlBase()}/group`;
    return this.http.get<any>(url, {params})
      .toPromise();
  }
}

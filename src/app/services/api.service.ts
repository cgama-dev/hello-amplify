import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import * as topojson from "topojson-client";


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Gets all info boxes data
   *
   * @returns {Observable<ServiceResponse<any[]>>}
   * @memberof ApiService
   */
  getInfoBoxesData(): Observable<ServiceResponse<any[]>> {
    return this.http.get<ServiceResponse<any[]>>('/assets/data/info_boxes.json');
  }

  /**
   * Gets all chart data by category of territory 
   *
   * @returns {Observable<ServiceResponse<any[]>>}
   * @memberof ApiService
   */
  getChartDataByCategory(tcategory): Observable<ServiceResponse<any[]>> {
    return this.http.get<ServiceResponse<any[]>>(`/assets/data/chart_data_${tcategory}.json`);
  }

  /**
   * Gets all territory data by category of territory 
   *
   * @returns {Observable<ServiceResponse<any[]>>}
   * @memberof ApiService
   */
  getTerritoryDataByCategory(tcategory): Observable<ServiceResponse<any[]>> {
    return this.http.get<ServiceResponse<any[]>>(`/assets/data/territory_data_${tcategory}.json`);
  }

  /**
   * Gets all territory data by category of territory 
   *
   * @returns {Observable<ServiceResponse<any[]>>}
   * @memberof ApiService
   */
  /* getStates(): Observable<ServiceResponse<any>> {
    return this.http.get<ServiceResponse<any[]>>(`/assets/territories/estado.json`).pipe(
      map(r => (topojson as any).topo2geo(r))
    )

  } */

}

export interface ServiceResponse<T> {
  data: T;
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from "../models/responseModels/listResponseModel";
import {Car} from "../models/entityModels/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:5001/api/cars/';

  constructor(private httpClient: HttpClient) {
  }

  getCarDetails(): Observable<ListResponseModel<Car>> {
    let newApiUrl = this.apiUrl;
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl + 'details');
  }

  getCarDetailsById(id: number): Observable<ListResponseModel<Car>> {
    let newApiUrl = this.apiUrl + "details?id=" + id;
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl);
  }
}


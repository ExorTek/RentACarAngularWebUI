import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarResponseModel} from '../models/responseModels/carResponseModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'http://localhost:5001/api/cars/';

  constructor(private httpClient: HttpClient) {
  }

  getCarDetails(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl + 'details');
  }
}


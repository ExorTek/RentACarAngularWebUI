import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/responseModels/listResponseModel";
import {Rental} from "../models/entityModels/rental";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:  HttpClient) { }

  apiUrl = 'https://localhost:5001/api/rentals/';

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}

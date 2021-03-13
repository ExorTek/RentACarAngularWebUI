import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentalResponseModel} from "../models/responseModels/rentalResponseModel";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:  HttpClient) { }

  apiUrl = 'http://localhost:5001/api/rentals/';

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}

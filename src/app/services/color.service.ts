import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ColorResponseModel} from "../models/responseModels/colorResponseModel";

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'http://localhost:5001/api/colors/';

  constructor(private httpClient: HttpClient) {
  }

  getColors(): Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}

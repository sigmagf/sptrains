import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LineModel } from '../classes/lineModel';

@Injectable({
  providedIn: 'root'
})
export class GetStatusService {

  constructor(private http: HttpClient) { }

  getLinesStatus() {
    //return this.http.get<LineModel[]>('https://metro-sp-api.herokuapp.com/');
    return this.http.get<LineModel[]>('//localhost:3000');
  }
}

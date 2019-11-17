import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Linha } from '../classes/Linha';

@Injectable({
  providedIn: 'root'
})
export class GetStatusService {

  constructor(private http: HttpClient) { }

  getLinesStatus() {
    //return this.http.get<LineModel[]>('https://metro-sp-api.herokuapp.com/');
    return this.http.get<Linha[]>('//localhost:3000');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './models/response';
import { Telefono } from './models/telefono';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class Service {
  urlTelefonos:string = '';

  constructor(
    private _http:HttpClient
  ) { }
  
  loginSavePos(cliente: Telefono):Observable<Response>{
    return this._http.post<Response>(this.urlTelefonos, cliente, httpOption);
  }

  loginSaveGet():Observable<Response>{
    return this._http.get<Response>(this.urlTelefonos);
  }

}
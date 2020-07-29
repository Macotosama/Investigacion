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
  private url: string = 'http://localhost:4000/api/customers';
  private urlEdit: string = 'http://localhost:4000/api/update';
  private urlDelet: string = 'http://localhost:4000/api/remove';
  private urlAdd: string = 'http://localhost:4000/api/add';
  constructor(
    private _http: HttpClient
  ){}

  get(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }

  add(cliente: Telefono):Observable<Response>{
    return this._http.post<Response>(this.urlAdd, cliente, httpOption);
  }

  delete(id: string):Observable<Response>{
    return this._http.delete<Response>(`${this.urlDelet}/${id}`);
  }

  edit(cliente: Telefono,id: string):Observable<Response>{
    return this._http.put<Response>(`${this.urlEdit}/${id}`, cliente, httpOption);
  }
}
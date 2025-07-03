import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataUser } from '../interfaces/IServiceUser';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlService = 'https://retoolapi.dev/iMNb5q/data';
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<DataUser[]> {
    return this.http.get<DataUser[]>(this.urlService);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlService = 'https://retoolapi.dev/iMNb5q/data';
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.urlService);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  ApiUrl = 'https://63bdfb7ae348cb0762070d1a.mockapi.io/';
  constructor(private http: HttpClient) {}
  getAlumnos() {
    return this.http.get(`${this.ApiUrl}alumnos`);
  }
}

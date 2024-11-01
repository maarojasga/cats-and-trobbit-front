import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private baseUrl = 'http://localhost:3000'; // Ajusta la URL según el backend

  constructor(private http: HttpClient) {}

  getCats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cats`);
  }

  getCatById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cats/${id}`);
  }

  createCat(catData: { name: string; age: number; breed: string; image: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/cats/newCat/add`, catData);
  }

  updateCat(id: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/cats/${id}`, updatedData);
  }

  deleteCat(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cats/${id}`);
  }
}

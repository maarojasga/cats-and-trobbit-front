// src/app/images/images.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/images`);
  }

  getFavorites(): Observable<any> {
    return this.http.get(`${this.baseUrl}/images/favourites`);
  }

  addToFavorites(imageId: string): Observable<any> {
    const body = { imageId };
    return this.http.post(`${this.baseUrl}/images/favourites/add`, body);
  }
}
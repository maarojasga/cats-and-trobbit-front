import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CatsService } from './cats.service';

@Injectable({
  providedIn: 'root'
})
export class CatsResolver implements Resolve<any> {
  constructor(private catsService: CatsService) {}

  resolve(): Observable<any> {
    return this.catsService.getCats();
  }
}

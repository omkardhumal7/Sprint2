import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { categoryUrl } from './Apis';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _categoryUrl =categoryUrl;

  constructor(private http:HttpClient,_router:Router) { }

  getCategories() {
    return this.http.get<any>(this._categoryUrl);
}
}
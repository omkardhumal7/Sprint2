import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { productUrl,myorderUrl } from './Apis';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productUrl = productUrl;
  private _myorderUrl=myorderUrl;
  constructor(private http: HttpClient,private _router:Router) { }

  
  getProducts() {
    return this.http.get<any>(this._productUrl);
  }
  getMyOrders(username:string){
    return this.http.get<any>(this._myorderUrl+"?username="+username);
  }
}
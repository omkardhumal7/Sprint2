import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

 // constructor() { }

  //ngOnInit(): void {
  //}

  public products : any = [];
  public grandTotal !: number;
  constructor(private _cart: CartService,private _router:Router) { }

  ngOnInit(): void {
    this._cart.getProductts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this._cart.getTotalPrice();
    })
  }
removeItem(item: any){
    this._cart.removeCartItem(item);
  }
  emptycart(){
    this._cart.removeAllCart();
  }
}
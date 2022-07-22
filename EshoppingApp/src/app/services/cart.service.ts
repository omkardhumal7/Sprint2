import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public products = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProductts() {
    return this.products.asObservable();
  }

  setProduct(productt: any) {
    this.cartItemList.push(...productt);
    this.products.next(productt);
  }
  addtoCart(productt: any) {
    this.cartItemList.push(productt);
    this.products.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.productMrp;
    })
    return grandTotal;
  }
  removeCartItem(productt: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (productt.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.products.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.products.next(this.cartItemList);
  }
}
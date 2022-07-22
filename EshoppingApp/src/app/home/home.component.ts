import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private _productservice: ProductService,private CartService : CartService) { }

  products: Array<Product> = new Array<Product>();
  ngOnInit(): void {

    this._productservice.getProducts().subscribe(res => {this.products = res; 

    this.products.forEach((a :any) =>{
    Object.assign(a,{quantity:1});
  });
})
  }

  addtocart(product : any){
    this.CartService.addtoCart(product);

  }

}
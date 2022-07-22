import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {



  constructor(public httpc:HttpClient, private _productservice:ProductService, private _router:Router) { }

  ngOnInit(): void {}

  adminprod: Product=new Product();
  adminprods:Array<Product>=new Array<Product>();

  AddProduct()
  {
    console.log(this.adminprod)
    var admindto={
      id:Number(this.adminprod.id),
      productName:this.adminprod.productName,
      productDescription:this.adminprod.productDescription,
      category:this.adminprod.category,
      productImage:this.adminprod.productImage,
      productMrp:Number(this.adminprod.productMrp),
      productDiscount:Number(this.adminprod.productDiscount),
      productSellingPrice:Number(this.adminprod.productSellingPrice),

    }
    this.httpc.put("https://localhost:44321/api/Product",admindto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.adminprod=new Product();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }

  Show(){
    console.log("Hi");
    this.httpc.get("https://localhost:44321/api/Product").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  GetSuccess(input:any){
    this.adminprods=(input);
  }
  GetError(input:any){
    console.log(input);
  }
  EditProduct(input: Product) {
    this.adminprod = input;
  }

}
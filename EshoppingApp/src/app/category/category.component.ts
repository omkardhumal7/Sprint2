import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {

  constructor(public httpc: HttpClient, private _catservice: CategoryService, private _router: Router){ }


  ngOnInit(): void {}

  cat:Category=new Category();
  cats:Array<Category>=new Array<Category>();

  AddCategory()
  {
    console.log(this.cat)

    var cato={
      id:Number(this.cat.id),
      catName:this.cat.catName,
    }
    this.httpc.post("https://localhost:44321/api/Category",cato).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.cat=new Category();
  }
  PostSuccess(res:any){
    console.log(res);
  }
  PostError(res:any){
    console.log(res);
  }

  Show(){
    console.log("hi");
    this.httpc.get("https://localhost:44321/api/Category").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  GetSuccess(input:any){
    this.cats=input;
  }
  GetError(input:any){
    console.log(input);
  }
}
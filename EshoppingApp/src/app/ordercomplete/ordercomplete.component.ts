import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalorder } from '../models/finalorder';
import { AdddetailService } from '../services/adddetail.service';

@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.component.html',
  styleUrls: ['./ordercomplete.component.css']
})
export class OrdercompleteComponent implements OnInit {

  constructor(public httpc: HttpClient, private _detail: AdddetailService, private _router: Router) { }

  ngOnInit(): void {
  }

  adddetail: finalorder = new finalorder();
  adddetails: Array<finalorder> = new Array<finalorder>();

  Adddetail() {
    console.log(this.adddetail)

    var deto = {
      id: Number(this.adddetail.id),

    }
  }
  Show() {
    console.log("Hi");
    this.httpc.get("https://localhost:44321/api/FinalOrder").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  GetSuccess(input: any) {
    this.adddetails = input;
  }
  GetError(input: any) {
    console.log(input);
  }
}

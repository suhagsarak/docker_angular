import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //result1 = {status : "",error:"", data :""};
  categories:any;
  products:any;
  users:any;

  constructor(private data : DataService) { }

  ngOnInit() {

    var obsResC=this.data.SelectCategories();

    obsResC.subscribe((result:any)=>{
      this.categories = result.data;
    })


    var obsResP=this.data.SelectProducts();

    obsResP.subscribe((result:any)=>{
      this.products  = result.data;
    })


    var obsResU=this.data.SelectUsers();

    obsResU.subscribe((result:any)=>{
      this.users  = result.data;
    })


  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  url="http://172.18.5.70:7777/";

  SelectCategories()
  {
   return this.http.get(this.url+"categories"); 
  }
  
  SelectProducts()
  {
   return this.http.get(this.url+"products"); 
  }

  SelectUsers()
  {
   return this.http.get(this.url+"users"); 
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  SelectCategories()
  {
   return this.http.get("http://172.18.5.70:7777/categories"); 
  }
  
  SelectProducts()
  {
   return this.http.get("http://172.18.5.70:7777/products"); 
  }

  SelectUsers()
  {
   return this.http.get("http://172.18.5.70:7777/users"); 
  }

}

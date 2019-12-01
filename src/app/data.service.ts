import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  SelectCategories()
  {
   return this.http.get("http://192.168.5.120:6666/categories"); 
  }
  
  SelectProducts()
  {
   return this.http.get("http://192.168.5.120:6666/products"); 
  }

  SelectUsers()
  {
   return this.http.get("http://192.168.5.120:6666/users"); 
  }

}

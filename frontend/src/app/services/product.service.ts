import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  private SERVER_URL = 'http://localhost/8000/api';
   get_all_products()
  {
    return this.http.get(this.SERVER_URL+'/products/') ;
  }
}

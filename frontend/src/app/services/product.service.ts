import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  private SERVER_URL = 'http://localhost:8000/api';
   getAllProducts(numberOfResults=10): Observable<any>
  {
    return this.http.get(this.SERVER_URL+'/products',{
    	params: {
    		limit: numberOfResults.toString()
    	}
    }) ;
  }
}

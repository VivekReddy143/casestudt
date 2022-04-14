import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  token: any;

  constructor(private http : HttpClient) { }

  getAllProducts(){
    return this.http.get('../../assets/jsons/products.json');
  }
}

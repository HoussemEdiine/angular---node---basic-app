import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'redux';
import {Product} from '../Product'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }
  public getProducts(){
    
    return this.http.get<Product []>('https://ecomerce-houssemapp.herokuapp.com/api/v1/products')


  }
  public addproduct(products:Product) {
    return this.http.post<Product>('https://ecomerce-houssemapp.herokuapp.com/api/v1/product/new', products)
 }

}

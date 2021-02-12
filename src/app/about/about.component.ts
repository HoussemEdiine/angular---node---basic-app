import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{Product} from '../Product'
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info = {
    name: 'houssem',
    age: 29,
    job:"angular developer"
  }
  comments: Array<Object> = []
  comment = { date: null, message: '' }
  newcomment = false

  addcomment() {
    if (this.comment.message != '') {
      this.comment.date = new Date();
      this.comments.push({
        date: this.comment.date,
        message : this.comment.message
      })
      this.comment.message = ''

         }
  }  
  public product: any;
  public products: Product;
  name = 'test'
  price: number;
  stock: number;
  category = "Laptops"
  seller = "amazon"
  description = "good product just for  testing"
  


  constructor(private productservice: ProductsService) { }
  public getproduct(): void{
    this.productservice.getProducts().subscribe(
      (response) => {
        this.product = response;
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
         
      }
    )
  } 
  public addprod(): void {
    this.products = { name: this.name, price: this.price, stock: this.stock, category: this.category , seller : this.seller ,description:this.description}
    console.log(this.products)
    this.productservice.addproduct(this.products).subscribe(
      (response) => {
        this.getproduct()
      }
    )
  }

  ngOnInit(): void {
   this.getproduct()
  }

}

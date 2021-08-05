import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { Component, OnInit , Input } from '@angular/core';
import { TypeProduct } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: TypeProduct[];
  validForm = false;
  detail: TypeProduct;
  

  constructor(private ProductService: ProductService) {
    
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    // this.products = this.ProductService.getProducts();
    this.ProductService.getProducts().subscribe(data=>{
      console.log(data);
      this.products = data;
      
    })
  }
  onHandleDelete(id:number) {
    this.ProductService.removeProduct(id).subscribe(data =>{
      console.log(data);
      this.products = this.products.filter(item => item.id !== id);
    
    })
    // console.log(id);

  }
  onDetail(product: TypeProduct) {
    
    console.log(product);
    this.detail = product;
  }
}

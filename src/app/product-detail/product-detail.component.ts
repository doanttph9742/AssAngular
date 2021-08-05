import { ProductService } from './../product.service';
import { TypeProduct } from './../product/product';
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: TypeProduct;
  constructor(private activatedRoute :ActivatedRoute, private productService : ProductService ) {
    // this.activedRoute.params.subscribe(params =>{
    //   this.ProductService.read(params.id).subscribe(data =>{
    //     this.product = data;
    //     console.log(this.product);
        
    //   })
    // })
   }

  ngOnInit(): void {
   this.getProduct(); 
  }
  getProduct(){
    this.activatedRoute.params.subscribe(params =>{
      console.log('data',params);
      this.productService.get(params.id).subscribe(data =>{
        console.log('data' ,data);
        this.product = data;
      })
    })
  }
}
; 
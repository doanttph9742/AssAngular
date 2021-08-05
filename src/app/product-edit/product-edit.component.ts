import { TypeProduct } from './../product/product';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: TypeProduct = {
    id:0,
    name:'',
    price:0,
    img:'',
    status:false,
};
constructor(
  private productServices: ProductService,
  private activatedRoute: ActivatedRoute,
  private router: Router
) {}
  ngOnInit(): void {
    this.getInfo();
    // this.productService.get(id)
  }
  getInfo(){
    this.activatedRoute.params.subscribe(params =>{
      this.productServices.get(params.id).subscribe(data =>{
        this.product = data;
        
      })
      console.log(params.id);
      
    })
  }
  onUpdateProduct(){
    this.productServices.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
    });
    
  }
}

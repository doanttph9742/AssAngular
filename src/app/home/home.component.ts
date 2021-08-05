import { ProductService } from './../product.service';
import { TypeProduct } from './../product/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  onAddProduct(tiem:TypeProduct){
    
    

  }

  onHandleDelete(id:number) {
    this.ProductService.removeProduct(id).subscribe(data =>{
      console.log(data);
      this.products = this.products.filter(item => item.id !== id);
    
    })
    // console.log(id);

  }
  onHandleChangeStatus() {
    // this.products.status = !this.products.status;

  }
  onHandleChangeName(event: any) {
    // this.products.name = event.target.value;

  }
  onDetail(product: TypeProduct) {
    
    console.log(product);
    this.detail = product;
  }
}

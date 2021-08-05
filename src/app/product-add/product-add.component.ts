import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { TypeProduct } from './../product/product';
import { Component, OnInit , Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // @Output() newProductEvent = new EventEmitter<TypeProduct>();

  product: TypeProduct = {
      id:0,
      name:'',
      price:0,
      img:'',
      status:false,
  };
  constructor(private ProductService : ProductService,private router: Router) { }

  ngOnInit(): void {
  }

  onAddProduct(){
    // this.newProductEvent.emit(this.product)
    // console.log(this.product);
    this.ProductService.addProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl('/product');
      console.log(data);
      
    });
    
  }
}

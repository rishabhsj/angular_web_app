import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product = {prodId: 1, name: "Mascara", category: "make-up", description: "Maybelline mascara adds volume", price: 6.99, photo: 'url'};
  constructor() { 
    console.log("Product Component loaded...");
  }
    
  ngOnInit(): void {
  }

}

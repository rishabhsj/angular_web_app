import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:Product[] = [
    {prodId: 1, name: "Mascara", category: "make-up", description: "Maybelline mascara adds volume", price: 6.99, photo: 'url'},
    {prodId: 2, name: "Shampoo", category: "personal care", description: "Smoothing shampoo will leave your hair nice and silky", price: 10.99, photo: 'url'},
    {prodId: 3, name: "Soap", category: "personal care", description: "Kills 99% of bacteria", price: 2.99, photo: 'url'}
  ];
  constructor() { 
    console.log('Product List Component loaded...')
  }

  ngOnInit(): void {
  }

}

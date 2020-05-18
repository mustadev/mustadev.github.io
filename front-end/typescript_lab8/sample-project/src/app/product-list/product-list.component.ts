import { Component, OnInit } from '@angular/core';
import { products } from "../products";

// product list
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  constructor() { 
  }


  ngOnInit(): void {
    console.log(JSON.stringify(products));

  }

  // share event
  share(){
    alert('the product has been shared');
  }

  // notify event
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

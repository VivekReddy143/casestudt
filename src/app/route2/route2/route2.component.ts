import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  products: any = [];
  gridView : boolean = true;
  listView : boolean = false;
  constructor(public productService : ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((result : any) => {
       this.products = result['products'];
       console.log(this.products);
       this.products = this.products.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
    })
  }

  onGrid(){
    this.gridView = true;
    this.listView = false;
  }

  onList(){
    this.gridView = false;
    this.listView = true;
  }

  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low: { price: number; }, high: { price: number; }) => high.price - low.price);
          break;
        }

      case "Title":
        {
          this.products = this.products.sort(function (low: { title: any; }, high: { title: any; }) {
            if (low.title < high.title) {
              return -1;
            }
            else if (low.title > high.title) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.products = this.products.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
        break;
      }

    }
    return this.products;

  }

}

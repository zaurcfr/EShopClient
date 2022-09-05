import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    
    // this.httpClientService.get<Product[]>({
    //   controller: "products"
    // }).subscribe(data => console.log(data));
    // --------------------------------------------------------
    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Product 5",
    //   stock: 50,
    //   price: 500
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Product 6",
    //   stock: 60,
    //   price: 600
    // }).subscribe();
    // // --------------------------------------------------------
    // this.httpClientService.put({
    //   controller: "products"
    // }, {
    //   id: "b8b91913-b166-4cb7-8eb6-cb5d45f478cc",
    //   name: "Product 6",
    //   stock: 600,
    //   price: 6000
    // }).subscribe
    // // --------------------------------------------------------
    // this.httpClientService.delete({
    //   controller: "products"
    // }, "e4ee848b-9f54-4ea7-9849-eb219c49222e").subscribe();
  
    // this.httpClientService.get({
    //   baseUrl: "https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    // }).subscribe(data => console.log(data));
  }

}

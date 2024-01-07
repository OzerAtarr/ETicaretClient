import { HttpClientService } from './../../../services/common/http-client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { data } from 'jquery';
import { Create_Product } from '../../../contracts/create_product';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit{
  constructor( spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
   }
  ngOnInit(): void{
   this.showSpinner(SpinnerType.BallAtom);


  //  this.httpClientService.get<Product[]>({
  //   controller: "products"
  // }).subscribe(data => console.log(data));


  //  this.httpClientService.post({
  //   controller: "products"
  //  }, {
  //   name: "Kalem",
  //   stock: 100,
  //   price: 15
  //  }).subscribe();


  //  this.httpClientService.put({
  //   controller: "products"
  //  }, {
  //   id: "712df3dd-97a8-43f5-b803-b409d0758d92",
  //   name: "Renkli Kağıt",
  //   stock: 1200,
  //   price: 5.5
  //  }).subscribe();


  //  this.httpClientService.delete({
  //   controller: "products"
  //  }, "712df3dd-97a8-43f5-b803-b409d0758d92").subscribe();

      // this.httpClientService.get({
      //   fullEndPoint: "https://jsonplaceholder.typicode.com/posts"
      // }).subscribe(data => console.log(data));
      
  }

  @ViewChild(ListComponent) listComponents: ListComponent;
  createdProduct(createdProduct: Create_Product){
    this.listComponents.getProducts();
  }
}

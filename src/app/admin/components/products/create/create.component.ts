import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { Create_Product } from './../../../../contracts/create_product';
import { ProductService } from './../../../../services/common/models/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit{
  constructor(spinner:NgxSpinnerService ,private productService: ProductService, private alertify: AlertifyService){
    super(spinner)
  }
ngOnInit(): void {
  
}

@Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
@Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action: "upload",
    controller: "products",
    explanation: "Resimleri sürükleyin veya seçin...",
    isAdminPage: true,
    accept: ".png, .jpg, .jpeg, json"
};

create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement){
  this.showSpinner(SpinnerType.BallAtom);
  const create_Product:Create_Product = new Create_Product();
  create_Product.name = name.value;
  create_Product.stock = parseInt(stock.value);
  create_Product.price = parseFloat(price.value);

  // if(!name.value){
  //   this.alertify.message("Lütfen ürün adı giriniz!",
  //     {
  //       dismissOthers: true,
  //       messageType: MessageType.Error,
  //       position: Position.TopRight
  //     })
  //   return;
  // }

  // if(parseInt(stock.value)<0){
  //   this.alertify.message("Lütfen stok bilgisini doğru giriniz!",
  //     {
  //       dismissOthers: true,
  //       messageType: MessageType.Error,
  //       position: Position.TopRight
  //     })
  //   return;
  //}

  this.productService.create(create_Product, () => {
    this.hideSpinner(SpinnerType.BallAtom);
    this.alertify.message("Ürün başarıyla eklenmiştir.",{
      dismissOthers: true,
      messageType: MessageType.Success,
      position: Position.TopRight
    });
    this.createdProduct.emit(create_Product);
  }, errorMessage => {
    this.alertify.message(errorMessage,
      {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      })
  });
}
}

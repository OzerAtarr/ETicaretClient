import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { extend } from 'jquery';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent extends BaseComponent implements OnInit{

constructor(spinner: NgxSpinnerService) {
  super(spinner);

}
ngOnInit(): void {
}
}

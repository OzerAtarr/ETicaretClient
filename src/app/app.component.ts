import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
// declare var $: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';
  constructor() {}
  // constructor(private toastrService: CustomToastrService) {
  //   toastrService.message("Merhaba", "Özer", {
  //     messageType: ToastrMessageType.Info,
  //     position: ToastrPosition.TopCenter
  //   });
  //   toastrService.message("Merhaba", "Özer", {
  //     messageType: ToastrMessageType.Warning,
  //     position: ToastrPosition.TopLeft
  //   });
  //   toastrService.message("Merhaba", "Özer", {
  //     messageType: ToastrMessageType.Error,
  //     position: ToastrPosition.BottomFullWidth
  //   });
  //   toastrService.message("Merhaba", "Özer", {
  //     messageType: ToastrMessageType.Warning,
  //     position: ToastrPosition.TopRight
  //   });
  //}


    ngOnInit(): void {

    }

}


  

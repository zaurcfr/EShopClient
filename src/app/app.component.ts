import { Component } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EShopClient';
  constructor(private toastrService: CustomToastrService) {
    // toastrService.message("Hello", "Test", {
    //   messageType: ToastrMessageType.Info,
    //   position: ToastrPosition.TopLeft,
    //   progressBar: true
    // });   
    // toastrService.message("Hello", "Test",{
    //   messageType: ToastrMessageType.Error,
    //   position: ToastrPosition.BottomLeft,
    //   progressBar: false
    // });   
    // toastrService.message("Hello", "Test",{
    //   messageType: ToastrMessageType.Warning,
    //   position: ToastrPosition.BottomRight,
    //   progressBar: true
    // });   
    // toastrService.message("Hello", "Test", {
    //   messageType: ToastrMessageType.Success,
    //   position: ToastrPosition.TopRight,
    //   progressBar: false
    // });   
  }
}

// $.get("https://localhost:7232/api/products", data => {
//   console.log(data);
// })
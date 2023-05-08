import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../client-service/popup.service';


@Component({
  selector: 'app-alert',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  //message: string;

  constructor(private alertService: PopupService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe(message => {
      //this.message = message;
      // Hiển thị cửa sổ thông báo tại đây
    });
  }

  onClose() {
    // Đóng cửa sổ thông báo tại đây
    //this.message = null;
  }
}

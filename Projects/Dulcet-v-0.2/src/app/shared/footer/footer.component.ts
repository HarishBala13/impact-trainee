import { Component } from '@angular/core';
import { AlertifyService } from 'src/app/core-services/alertifyjs/alertify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private alertifyService:AlertifyService){

  }
  advertise(){    this.alertifyService.ADService();  }
}

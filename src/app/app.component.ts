import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'projects/logger-file/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dulcet - FrontEnd';
  constructor(private logger:LoggerService){
    if(sessionStorage.getItem("isUserLoggedIn") == "true"){
    }
    else{
      sessionStorage.setItem('isUserLoggedIn', 'false');
    }
  }

  ngOnInit() {
    this.logger.updateMyLog('Component initialized');
  }

  someAction() {
    // Some action that triggers a log
    this.logger.log('Some action occurred');
  }

  downloadLogs() {
    this.logger.downloadLogs();
  }
}

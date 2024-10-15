/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoggerService } from 'projects/logger-file/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dulcet - FrontEnd';
  currentRoute: string = '';
  isSelfFunctionableComponent: boolean = false;

  constructor(private logger: LoggerService, private router: Router) {

    this.router.events.subscribe((urltree) => {
      if (urltree instanceof NavigationEnd) {
        this.currentRoute = urltree.url;
      }
      if (
        this.currentRoute.split('/')[1] == 'signin' ||
        this.currentRoute.split('/')[1] == 'signin?returl=playlists' ||
        this.currentRoute.split('/')[1] == 'signin?returl=payment' ||
        this.currentRoute.split('/')[1] == 'signup' ||
        this.currentRoute.split('/')[1] == 'forgotpassword' ||
        this.currentRoute.split('/')[1] == 'updatepassword'
      ) {
        this.isSelfFunctionableComponent = true;
      }
    });
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

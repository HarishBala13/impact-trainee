/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  login: boolean = true;
  loggedinNavBar: boolean = false;
  toggleOffBoolean: boolean = true;
  toggleOnBoolean: boolean = true;
  toggleClickedOffBoolean: boolean = false;
  closeIcon: boolean = false;
  barIcon: boolean = true;

  constructor(private router: Router) {
    if (sessionStorage.getItem('isUserLoggedIn') == 'true') {
      this.loggedinNavBar = true;
      this.login = false;
    }
  }

  openToggleOffDiv() {
    this.toggleClickedOffBoolean = !this.toggleClickedOffBoolean;
    this.toggleOffBoolean = !this.toggleOffBoolean;
    this.closeIcon = !this.closeIcon;
    this.barIcon = !this.barIcon;
  }

  logout() {
    if (confirm('Are you want to Logout ?') == true) {
      sessionStorage.setItem('isUserLoggedIn', 'false');
      sessionStorage.setItem('onceSessionLogin','false');
      sessionStorage.removeItem('currentUserName');
      sessionStorage.removeItem('currentUserEmail');
      sessionStorage.removeItem('currentUserJSONID');
      this.router.navigate(['signin']).then(() => {
        location.reload();
      });
    }
  }
}

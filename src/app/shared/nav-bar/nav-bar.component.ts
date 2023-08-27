import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  checkUserLogin : boolean = true;
  checkedUserLoggedinNavbar : boolean = false;

  constructor( private router : Router ){
    if(sessionStorage.getItem("isUserLoggedIn")=='true'){
      this.checkUserLogin = false;
      this.checkedUserLoggedinNavbar = true;
    }
  }

  logout(){
    if(confirm("Are you want to Logout ?") == true){
      sessionStorage.setItem("isUserLoggedIn", 'false');
      sessionStorage.removeItem("currentUserName");
      sessionStorage.removeItem("currentUserEmail");
      sessionStorage.removeItem("currentUserJSONID");
      this.router.navigate(['signin']).then(()=>{
        location.reload();
      })
    }
 }

}

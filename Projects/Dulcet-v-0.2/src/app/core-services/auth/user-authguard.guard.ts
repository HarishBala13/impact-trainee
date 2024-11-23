/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthguardGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      if(sessionStorage.getItem("isUserLoggedIn") === "false"){
        this.router.navigate(['signin'],{queryParams:{returl:route.url}});
        return false;
      }
      else if(sessionStorage.getItem('isUserLoggedIn') === 'true'){
        return true;
      }
      else if(!sessionStorage.getItem("currentUserName")){
        this.router.navigate(['signin'], {queryParams: {returl: route.url}});
        return false;
      }
      else{
        return true;
      }
  }

}

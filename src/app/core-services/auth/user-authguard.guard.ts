import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthguardGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      if(sessionStorage.getItem('isUserLoggedIn')=="false"){
        this.router.navigate(['signin'],{queryParams:{returl:route.url}});
        return false;
      }
      else if(sessionStorage.getItem('isUserLoggedIn')=='true'){
        return true;
      }
      else if(!sessionStorage.getItem("currentUserName")){
        // console.log("Another tab SessionStorage works");
        this.router.navigate(['signin'], {queryParams: {returl: route.url}});
        return false;
      }
      else{
        return true;
      }
  }

}

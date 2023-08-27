import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from 'projects/logger-file/src/public-api';
import { environmentvalues } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  JSONID:any='';

  constructor( private _http:HttpClient, private router:Router, private loggerFileService:LoggerService ) {
    this.JSONID = sessionStorage.getItem("currentUserJSONID");
    this.loggerFileService.log(this.JSONID);
  }

  updateUserProfile(path:any,userName:any){
    this.loggerFileService.log(path);
    this.loggerFileService.log(userName);

    this._http.patch(environmentvalues.user_registration_url+'/'+this.JSONID , { profilePicture:path, regname:userName}).subscribe( () => {
      this.router.navigate(['profile/editprofile']).then(() =>{
        location.reload();
      })
    });
  }

  getUserProfileDetails(){
    return this._http.get(environmentvalues.user_registration_url+'/'+this.JSONID);
  }
}

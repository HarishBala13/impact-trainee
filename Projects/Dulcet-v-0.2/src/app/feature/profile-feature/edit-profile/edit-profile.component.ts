/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoggerService } from 'projects/logger-file/src/public-api';
import { ProfileService } from 'src/app/core-services/profile-service/profile.service';
import { environmentvalues } from 'src/app/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  profileName : any = '';
  JSONID : any = '';
  editProfile : boolean = false;
  userProfileDiv : boolean = true;
  userProfileFile : any = '';
  profileImagePath : any = '';
  userDefaultProfileImage : string = "/assets/home-images/person.png";
  profiles : any = '';
  date : any = '';
  today : any = '';

  constructor(private formbuilder:FormBuilder,
    private profileService:ProfileService,
    private _http:HttpClient,
    private loggerFileService:LoggerService){
    this.JSONID = sessionStorage.getItem('currentUserJSONID');

    this.date = new Date();
    this.today = this.date.toDateString();

    profileService.getUserProfileDetails().subscribe( values => {
      this.profiles = values;
      this.profileName = this.profiles.regname;
      this.userDefaultProfileImage = this.profiles.profilePicture;
    })
  }

  userProfile(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files;
      this.userProfileFile = file;
    }
  }

  editUsersProfile(userName:any){
    const userProfileformData = new FormData();
    // console.log(this.userProfileFile);
    for(let userProfile of this.userProfileFile){
      userProfileformData.append('userProfile',userProfile);
    }

    this._http.post(environmentvalues.user_profile_upload_url, userProfileformData).subscribe( values =>
    {
      this.loggerFileService.log(values)
    });

    this.loggerFileService.log(this.userProfileFile[0].name)

    this.profileImagePath = '/assets/user-profile-storage/'+this.userProfileFile[0].name;
    this.profileService.updateUserProfile(this.profileImagePath,userName)

  }

  openEditUserProfileDiv(){
    this.editProfile = true;
    this.userProfileDiv = false;
  }

  closeEditUserProfileDiv(){
    this.editProfile = false;
    this.userProfileDiv = true;
  }
}

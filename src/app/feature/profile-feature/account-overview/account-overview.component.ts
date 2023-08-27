import { Component } from '@angular/core';
import { ProfileService } from 'src/app/core-services/profile-service/profile.service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent {
  currentUserProfileName : any = '';
  currentUserEmailID : any = '';
  cuurentUserJSONID : any = '';
  profiles : any = '';

  constructor(private profileService:ProfileService){

    this.profileService.getUserProfileDetails().subscribe(values => {
      this.profiles = values;
      this.currentUserProfileName = this.profiles.regname;
    });

    this.currentUserEmailID=sessionStorage.getItem('currentUserEmail');
    this.cuurentUserJSONID = sessionStorage.getItem('currentUserJSONID');
  }

}

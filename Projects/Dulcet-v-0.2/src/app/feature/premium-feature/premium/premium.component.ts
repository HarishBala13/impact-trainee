/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PremiumService } from 'src/app/core-services/premium-service/premium.service';
import { UsersLogService } from 'src/app/core-services/users/users-log.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PremiumComponent {

  premiumPlansJSON:any;
  name:any='';
  id:any='';
  constructor(private userLogService:UsersLogService,
    private premiumService:PremiumService, private router:Router){
    this.name = userLogService.currentUserProfileName;
    this.id = sessionStorage.getItem("currentUserJSONID");
    this.premiumService.premiumPlansService().subscribe(plans => {
      this.premiumPlansJSON = plans;
      // console.log(plans);
    })
  }

  subscribeOffer(premiumPlans:any){
    if(sessionStorage.getItem("isUserLoggedIn") == "true"){
      console.log('premiumPlans :>> ', premiumPlans);
      this.premiumService.userSubscribingPremiumPlans(premiumPlans,this.id);
      // this.router.navigateByUrl('payment').then(() => {
      //   location.reload();
      // });
    }
    // else{
    //   this.router.navigateByUrl('signin').then(() => {
    //     location.reload();
    //   })
    // }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environmentvalues } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  jsonID:any='';
  emailID:any='';
  userName:any='';
  paymentDetails:any=[];
  paymentDetailsEmail:any='';
  paymentInfo:any='';
  paymentValues:any='';

  constructor(private _http:HttpClient,private router:Router) {
    this.emailID = sessionStorage.getItem("currentUserEmail");
    this.userName = sessionStorage.getItem("currentUserName");
    this.jsonID = sessionStorage.getItem("currentUserJSONID");
  }

  getVisaCardBINNumber(){
    return this._http.get(environmentvalues.visa_cards_url);
  }

  getMasterCardsBINNumber(){
    return this._http.get(environmentvalues.master_cards_url)
  }

  userPaymentDetails(expiryDate:any,cardName:any,cardNumber:any,cardHolderName:any,cardImage:any,purchasedDate:any,planTitle:any,plansOffer:any,planPrice:any,state:any,premiumPurchasedDateWithTime:any){
    this.paymentDetails = {
      cardExpiryDate: expiryDate,
      cardType: cardName,
      cardNumber: 'XXXX XXXX '+cardNumber.slice(12),
      cardHolderName: cardHolderName,
      cardImage: cardImage,
      premiumPlanPurchasedDate: purchasedDate,
      premiumPlanPurchasedDateWithTime : premiumPurchasedDateWithTime,
      premiumPlanTitle: planTitle,
      premiumPlanOffers: plansOffer,
      premiumPlanPrice: planPrice,
      userState: state
    }
    this._http.patch(environmentvalues.user_registration_url+"/"+this.jsonID, {paymentCard: [this.paymentDetails]}).subscribe( () => {});

    this.paymentDetailsEmail = {
      userEmail : this.emailID,
      userName : this.userName,
      premiumPlanPurchasedDateWithTime : premiumPurchasedDateWithTime,
      premiumPlanTitle : planTitle,
      premiumPlanOffers : plansOffer,
      premiumPlanPrice : planPrice
    }

    this.sendRegisteredPremiumPlanEmail("http://localhost:1999/sendRegisteredPremiumPlanEmail",this.paymentDetailsEmail);
  }

  getUserDetails(){
    return this._http.get(environmentvalues.user_registration_url+"/"+this.jsonID);
  }

  getStates(){
    return this._http.get(environmentvalues.states_url);
  }

  sendRegisteredPremiumPlanEmail(url:any, userData:any){
    return this._http.post(url,userData);
  }

  deleteUserPaymentCard(){
    return this._http.patch(environmentvalues.user_registration_url+"/"+this.jsonID, {paymentCard: []}).subscribe( () => {
    this.router.navigate(['profile/paymentcard']).then( () => {
      location.reload();
    })
    });
  }
}

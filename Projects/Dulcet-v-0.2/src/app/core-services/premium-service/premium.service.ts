/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environmentvalues } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  subscribedPlansProperty:any='';
  myPremiumPlansArray:any =[];
  jsonID:any='';

  constructor(private _http:HttpClient) {
    this.jsonID = sessionStorage.getItem("currentUserJSONID");
  }

  premiumPlansService(){
    return this._http.get(environmentvalues.premium_url);
  }

  userSubscribingPremiumPlans(premiumPlan:any,id:any){
    this.myPremiumPlansArray = {
      plans: {
        title: premiumPlan.plans.title,
        offer: premiumPlan.plans.offer,
        info: premiumPlan.plans.info
      },
      benefits: {
        one: premiumPlan.benefits.one,
        two: premiumPlan.benefits.two
      },
      id: premiumPlan.id
    }
    console.log(this.myPremiumPlansArray);
    this._http.get(environmentvalues.premium_url).subscribe((values:any) => {
      const findPremiumPlan = values.find( (newvalues:any) => {
        if(newvalues.id == premiumPlan.id){
          this.subscribedPlansProperty = newvalues;
          return this.subscribedPlansProperty;
        }
      })
      if(findPremiumPlan){
        if(this.subscribedPlansProperty.subscribedPlans != null){
          this.subscribedPlansProperty.subscribedPlans.push(this.myPremiumPlansArray);
          console.log(this.subscribedPlansProperty.subscribedPlans.push(this.myPremiumPlansArray));
          this._http.patch(environmentvalues.user_registration_url+"/"+id,{subscribedPlans:this.subscribedPlansProperty.subscribedPlans}).subscribe(values => {});
        }
        else{
          this._http.patch(environmentvalues.user_registration_url+"/"+id,{subscribedPlans:[this.myPremiumPlansArray]}).subscribe(values => {});
        }
      }
    })
  }

  userSubscribedPremiumPlan(){
    return this._http.get(environmentvalues.user_registration_url+"/"+this.jsonID);
  }

  // subscription:Subscription[]=[];

  // orderConfirm:any=[];
  // newDate:any=[];
  // date:any=[];
  // dateFormat:any=[];
  // normaldateFormat:any=[];
  // orderDate:any=[];


  // orderCount=0;
  // getOrderedDate:any=[];
  // setOrderedDate:any=[];


  // getOrderedDetails:any=[];
  // setOrderedDetails:any=[];


  // userMob:any=[];
  // loggedPhonenumber:any=[];

  // customerDetails:any=[];
  // OrderDetails:any=[];

  // intervalId:any;
// getTime(ordereddate:any){
//   this.loggedPhonenumber = sessionStorage.getItem('isusername');
//   this.userMob = JSON.parse(this.loggedPhonenumber);
//   this._http.get("http://localhost:3000/customerDetails/"+this.userMob.phonenumber).subscribe(x=>{
//     this.customerDetails=x;
//     this.setOrderedDetails=this.customerDetails.paymentOrderedDetails
//     this.getOrderedDate=this.customerDetails.orderedDate
//     ++this.orderCount;
//   if(this.getOrderedDate==null){
//     this.dateFormat=[ordereddate];
//     this._http.patch("http://localhost:3000/customerDetails/"+this.userMob.phonenumber,{orderedDate:this.dateFormat}).subscribe(x=>{
//       console.log(x);
//      });;
//   }
//   else{
//     this.getOrderedDate.push(ordereddate);
//     this._http.patch("http://localhost:3000/customerDetails/"+this.userMob.phonenumber,{orderedDate:this.getOrderedDate}).subscribe(x=>{
//       console.log(x);
//      });;
//   }
//   this.startInterval();
// });
// }

// startInterval(){
//   setInterval(()=>{
//     this.loggedPhonenumber = sessionStorage.getItem('isusername');
//   this.userMob = JSON.parse(this.loggedPhonenumber);
//   this._http.get("http://localhost:3000/customerDetails/"+this.userMob.phonenumber).subscribe(x=>{
//     this.customerDetails=x;
//     this.setOrderedDetails=this.customerDetails.paymentOrderedDetails
//     this.getOrderedDate=this.customerDetails.orderedDate
//     if(this.getOrderedDate!=null){
//       this.date=new Date();
//       this.normaldateFormat=formatDate(this.date.getTime(), 'dd-MMM-yyyy hh:mm:ss a','en-US','+0530');

//       if(this.getOrderedDate[0]==this.normaldateFormat){
//         if(this.setOrderedDetails.length>=0 && this.getOrderedDate.length>=0){
//         this.getOrderedInfo(this.setOrderedDetails[0]);
//         }
//         this.setOrderedDetails.splice(0,1);
//         this.getOrderedDate.splice(0,1);
//         if(this.setOrderedDetails.length>=0 && this.getOrderedDate.length>=0){
//           this._http.patch("http://localhost:3000/customerDetails/"+this.userMob.phonenumber,{paymentOrderedDetails:this.setOrderedDetails}).subscribe(x=>{
//             console.log(x);
//           });

//         console.log(this.getOrderedDate);
//           this._http.patch("http://localhost:3000/customerDetails/"+this.userMob.phonenumber,{orderedDate:this.getOrderedDate}).subscribe(x=>{
//             console.log(x);
//            });;
//         }
//       }

//       console.log(this.date.toString().slice(22,24));
//     }


//   });
//   },1000);
// }

// getOrderedInfo(orderedInfo:any){
//   console.log(orderedInfo);
//     this.loggedPhonenumber = sessionStorage.getItem('isusername');
//     this.userMob = JSON.parse(this.loggedPhonenumber);
//     this._http.get("http://localhost:3000/customerDetails/"+this.userMob.phonenumber).subscribe(x=>{
//       this.customerDetails=x;
//       this.OrderDetails=this.customerDetails.Orders;

//       if(this.OrderDetails==null || this.OrderDetails.length==0){
//          this._http.patch("http://localhost:3000/customerDetails/"+this.userMob.phonenumber,{Orders:[orderedInfo]}).subscribe(x=>{
//           console.log(x);
//          });
//       }
//       else{
//         this.OrderDetails.push(orderedInfo);
//         this._http.patch("http://localhost:3000/customerDetails/"+this.userMob.phonenumber,{Orders:this.OrderDetails}).subscribe(x=>{
//           console.log(x);
//          });;
//       }

//     })
//   }
}

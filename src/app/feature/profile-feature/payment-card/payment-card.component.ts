/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component } from '@angular/core';
import { PaymentService } from 'src/app/core-services/payment-service/payment.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent {

  cardDetails:any='';
  expiryDate:any=' ';
  userCardNumber:any=' ';
  userCardType:any=' ';
  cardTypeTitle:any=' ';
  cardImage:string='';
  cardHolderName:any=' ';
  paymentCardDiv : boolean = false;
  noPaymentCardDiv : boolean = false;
  cardCancelConfirmation : boolean = false;

  constructor(private paymentService:PaymentService){
    console.log(paymentService.paymentInfo);
    paymentService.getUserDetails().subscribe(values => {
      this.cardDetails = values;
      console.log(this.cardDetails.paymentCard)


    if(this.cardDetails.paymentCard.length == 0){
      this.paymentCardDiv = false;
      this.noPaymentCardDiv = true;
      this.cardCancelConfirmation = false;
    }
    else{
      this.expiryDate = this.cardDetails.paymentCard[0].cardExpiryDate;
      this.userCardNumber = this.cardDetails.paymentCard[0].cardNumber;
      this.userCardType = this.cardDetails.paymentCard[0].cardType;
      this.cardImage = this.cardDetails.paymentCard[0].cardImage;
      this.cardHolderName = this.cardDetails.paymentCard[0].cardHolderName;
      if(this.cardImage.includes('visa')){
        this.cardTypeTitle = 'VISA';
      }
      else{
        this.cardTypeTitle = 'MASTERCARD';
      }
      this.paymentCardDiv = true;
      this.noPaymentCardDiv = false;
    }
    });
  }

  openCardCancelConfirmation(){
    this.cardCancelConfirmation = true;
    this.paymentCardDiv = false;
    this.noPaymentCardDiv = false;
  }
  closeCardCancelConfirmation(){
    this.cardCancelConfirmation = false;
    this.paymentCardDiv = true;
  }

  removeUserPaymentCard(){
    this.paymentService.deleteUserPaymentCard();
  }

}

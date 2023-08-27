import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/core-services/alertifyjs/alertify.service';
import { UsersLogService } from 'src/app/core-services/users/users-log.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private userLogService:UsersLogService,
    private _client:HttpClient,
    private route:Router,
    private formBuilder:FormBuilder,
    private alertifyService:AlertifyService){}
    forgotpassForm=this.formBuilder.group({
      forgotname:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]],
      forgotpassemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })


    submitForgotPassForm(){
      this._client.get<any>("http://localhost:3000/usersregister").subscribe(userdata=>{
        const forgotdet=userdata.find((results:any)=>{
          if(results.regemail == this.forgotpassForm.value.forgotpassemail && results.regname == this.forgotpassForm.value.forgotname){
            return results.id;
          }
        })
        let users={
          userEmail:this.forgotpassForm.value.forgotpassemail,
          userName:this.forgotpassForm.value.forgotname
        }
        console.log(forgotdet)
        if(forgotdet){
          this.alertifyService.Success("Reset password has been sent to your Email ID");
          localStorage.setItem("ForgotEmail",JSON.stringify(users.userEmail));
          console.log(localStorage.getItem("ForgotEmail"));
          localStorage.removeItem("ForgotEmail");
          this.userLogService.sendPasswordRecoveryEmail("http://localhost:1999/sendForgotPassEmail",users).subscribe((data)=>{
            console.log(data)
          });
        }
        else{
          this.alertifyService.Error("Name and Email ID not found");
        }
      });
    }

    forgotReset(){
    this.forgotpassForm.reset();
  }

  closeForgotPassForm(){
    this.route.navigate(['signin']);
  }
  home(){
    this.route.navigate(['']);
  }

}

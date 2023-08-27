import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/core-services/alertifyjs/alertify.service';
import { UsersLogService } from 'src/app/core-services/users/users-log.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  currentuserJSONID : number = 0;

  public ID:any='';
  constructor(private userLogService:UsersLogService,
    private _client:HttpClient,
    private router:Router,
    private formBuilder:FormBuilder,
    private alertifyService:AlertifyService){

    }
  forgotnewpassForm=this.formBuilder.group({
    forgotpassword:['',[Validators.required,Validators.pattern(`(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}`)]],
    reforgotpassword:['',[Validators.required,Validators.pattern(`(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}`)]]
  })

  submitForgotnewPassForm(){
    let forgotEmail = localStorage.getItem("ForgotEmail");
    console.log(forgotEmail);
    this._client.get<any>("http://localhost:3000/usersregister").subscribe(x=>{
      const OldPass = x.find((y:any)=>{
        console.log(y.regemail);
        return  forgotEmail == y.regemail && this.forgotnewpassForm.value.forgotpassword == y.regpassword && this.forgotnewpassForm.value.reforgotpassword && y.regconfirmpassword
      });
      if(OldPass){
        this.alertifyService.Error("Entered Password matches with old password...Please Kindly recheck");
      }
      else if(this.forgotnewpassForm.value.forgotpassword == this.forgotnewpassForm.value.reforgotpassword){
        console.log(OldPass)
        this.alertifyService.Success("Password updated Successfully..You will be redirected to Login page in a few seconds");
        this.userLogService.updateUser(this.forgotnewpassForm.value.forgotpassword,this.forgotnewpassForm.value.reforgotpassword,this.currentuserJSONID);
        setTimeout(()=>this.router.navigate(['login']),5000);
      }
      else{
        this.alertifyService.Error("Password not matched..Please Kindly recheck");
      }

    })
  }

forgotReset(){
  this.forgotnewpassForm.reset();
}

closeForgotnewPassForm(){
  this.router.navigate(['signin'])
}

}

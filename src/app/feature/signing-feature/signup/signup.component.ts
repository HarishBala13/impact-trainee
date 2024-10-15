/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/core-services/alertifyjs/alertify.service';
import { UsersLogService } from 'src/app/core-services/users/users-log.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  styles: [`input.ng-invalid{border: 2px solid red;} input.ng-valid{border:2px solid green;} input.ng-untouched{border:none;}`]
})
export class SignupComponent {

  constructor(private formBuilder:FormBuilder, private userLogService:UsersLogService, private alertifyService:AlertifyService,
    private router:Router){}

  userRegisterTime:string='';
  registerday = new Date();
  registerForm=this.formBuilder.group({
    regname:['',[Validators.required,Validators.pattern("^(?!.(.).\1{2})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    regemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$")]],
    regpassword:['',[Validators.required,Validators.pattern(`(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\;:\{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\]])[A-Za-z0-9\d$@].{7,}`)]],
    regconfirmpassword:['',[Validators.required,Validators.pattern(`(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\;:\{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\]])[A-Za-z0-9\d$@].{7,}`)]]
  })


  submitRegisterForm(){
    if(this.registerForm.value.regpassword == this.registerForm.value.regconfirmpassword){

      this.userRegisterTime=formatDate(this.registerday, 'dd-MM-yyyy hh:mm:ss a', 'en-US');

      let newRegUser = {
        regname:this.registerForm.value.regname,
        regemail:this.registerForm.value.regemail,
        regpassword:this.registerForm.value.regpassword,
        regconfirmpassword:this.registerForm.value.regconfirmpassword,
        UserRegisterTime:this.userRegisterTime
      }

      let emailUserData = {
        useremail:this.registerForm.value.regemail,
        username:this.registerForm.value.regname,
        registeredtime:this.userRegisterTime
      }

      this.userLogService.validRegisteredUser(newRegUser, emailUserData);
      this.registerForm.reset();
    }
    else if(this.registerForm.value.regpassword != this.registerForm.value.regconfirmpassword){
      this.alertifyService.Error("Password doesn't match");
    }
    else if(this.registerForm.value.regname == '' && this.registerForm.value.regemail == '' && this.registerForm.value.regpassword == '' && this.registerForm.value.regconfirmpassword == ''){
      this.alertifyService.Error("Please fill all the Blanks");
    }
  }

  closeRegisterForm(){
    this.router.navigate(['signin'])
  }
  registerReset(){
    this.registerForm.reset();
  }

}

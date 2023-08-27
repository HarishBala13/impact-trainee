import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { UsersLogService } from 'src/app/core-services/users/users-log.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  styles: [`input.ng-invalid{border: 2px solid red;} input.ng-valid{border:2px solid green;} input.ng-untouched{border:none;}`]
})
export class SigninComponent {

  errormessage='';
  returl:any;

  constructor( private userLogService:UsersLogService,
    private formBuilder:FormBuilder,
    private router:Router,private activate:ActivatedRoute){
      this.activate.queryParamMap.subscribe( x => {
        this.returl = x.get('returl');
        // console.log(this.returl);
      })
      this.errormessage = this.userLogService.errorMessage;
     }

  loginForm = this.formBuilder.group({
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    password:['',[Validators.required,Validators.pattern(`(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}`)]]
  })

submitLoginForm(){
  this.userLogService.loginCheckUser(this.loginForm.value.email,this.loginForm.value.password,this.returl);
}

loginReset(){
  this.loginForm.reset();
}

closeLoginForm(){
  this.router.navigate(['']);
}

}

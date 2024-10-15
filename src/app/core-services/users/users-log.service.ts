/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertifyjs/alertify.service';
import { environmentvalues } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersLogService {
  errorMessage = '';
  returnURL: any = '';
  currentUserProfileName: any = '';
  currentUserJSONID: any = '';
  currentUserEmailID: any = '';

  constructor(
    private _client: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  addUser(body: any) {
    return this._client.post(environmentvalues.user_registration_url, body);
  }

  loginCheckUser(userEmail: any, userPass: any, returl: any) {
    this._client
      .get<any>(environmentvalues.user_registration_url)
      .subscribe((values) => {
        const user = values.find((result: any) => {
          return result.regemail == userEmail && result.regpassword == userPass;
        });

        if (user) {
          sessionStorage.setItem('isUserLoggedIn', 'true');
          sessionStorage.setItem('currentUserName', user.regname);
          sessionStorage.setItem('currentUserJSONID', user.id);
          sessionStorage.setItem('currentUserEmail', user.regemail);

          this.currentUserProfileName =
            sessionStorage.getItem('currentUserName');
          this.currentUserJSONID = sessionStorage.getItem('currentUserJSONID');
          this.currentUserEmailID = sessionStorage.getItem('currentUserEmail');

          if (returl == null) {
            this.router.navigateByUrl('/').then(() => {
              location.reload();
            });
          } else {
            this.router.navigate([returl]);
          }
          this.alertifyService.Success('Login Success');
        } else if (
          (userEmail = 'dulcetonline2023@gmail.com' && userPass == '@dulcet123')
        ) {
          if (prompt("Enter your I'D: ") == '123') {
            this.alertifyService.Success('Admin Login Success');
            this.router.navigateByUrl('admin').then(() => {
              location.reload();
            });
          } else {
            this.alertifyService.Error('Unauthorized Login');
          }
        } else if (!user) {
          this.alertifyService.Error('User not Found');
        }
      });
  }

  validRegisteredUser(userData : any, emailUserData : any) {
    this._client
      .get<any>(environmentvalues.user_registration_url)
      .subscribe((emailValues) => {
        const validEmail = emailValues.find(
          (result: { regemail: string | null | undefined }) => {
            return (
              result.regemail == userData.regemail
            );
          }
        );
        if(validEmail){
          this.alertifyService.Error("Email I'D already exists.. Please create a new one");
        }
      else{
        this.addUser(userData).subscribe((success) => {
          if(success){
            setTimeout(() => {
              this.sendRegisterEmail(environmentvalues.send_email_verification_url, emailUserData).subscribe();
            }, 6000);

            this.alertifyService.NotifyUser(userData.regname,`Please check your mail ${userData.regemail} for verification..Thank You`);

            setTimeout(()=> {
              this.router.navigate(['signin']);
            },4000);
          }
        });
      }
      });
  }

  updateUser(password: any, repassword: any, length: any) {
    return this._client.patch(
      environmentvalues.user_registration_url + '/' + length,
      { regpassword: password, regconfirmpassword: repassword, summa: password }
    );
  }

  sendPasswordRecoveryEmail(URL: any, userData: any) {
    return this._client.post(URL, userData);
  }

  sendRegisterEmail(urL: any, userData: any) {
    return this._client.post(urL, userData);
  }

  // routingGuardPath(URL:any){
  //   this.returnURL = console.log(URL[0]['path']);
  // }
}

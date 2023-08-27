import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-feature/home/home.component';
import { LibraryTopSongsComponent } from './home-feature/library-top-songs/library-top-songs.component';
import { LibraryMixedSongsComponent } from './home-feature/library-mixed-songs/library-mixed-songs.component';
import { SigninComponent } from './signing-feature/signin/signin.component';
import { SignupComponent } from './signing-feature/signup/signup.component';
import { PlaylistsComponent } from './playlist-feature/playlists/playlists.component';
import { ForgotPasswordComponent } from './signing-feature/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './signing-feature/update-password/update-password.component';
import { SearchComponent } from './search-feature/search/search.component';
import { UserAuthguardGuard } from '../core-services/auth/user-authguard.guard';
import { ProfileComponent } from './profile-feature/profile/profile.component';
import { EditProfileComponent } from './profile-feature/edit-profile/edit-profile.component';
import { SubscriptionInfoComponent } from './profile-feature/subscription-info/subscription-info.component';
import { PaymentCardComponent } from './profile-feature/payment-card/payment-card.component';
import { MyPlaylistsComponent } from './profile-feature/my-playlists/my-playlists.component';
import { AccountOverviewComponent } from './profile-feature/account-overview/account-overview.component';
import { PremiumComponent } from './premium-feature/premium/premium.component';
import { PaymentComponent } from './payment-feature/payment/payment.component';
import { PaymentSuccessComponent } from './payment-feature/payment-success/payment-success.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Dulcet - Home'
   },
  {
    path:'premium',
    component:PremiumComponent,
    title:'Dulcet - Premium'
  },
  {
    path:'signin',
    component:SigninComponent,
    title:'Dulcet - Signin'
  },
  {
    path:'playlists',
    component:PlaylistsComponent,
    canActivate:[UserAuthguardGuard],
    title:'Dulcet - Playlists'
   },
   {
    path:'search',
    component:SearchComponent,
    title:'Dulcet - Search'
   },
   {
    path:'topsongs',
    component:LibraryTopSongsComponent,
    title:'Dulcet - Topsongs'
   },
   {
    path:'mixedsongs',
    component:LibraryMixedSongsComponent,
    title:'Dulcet - Mixedsongs'
   },
   {
    path:'signup',
    component:SignupComponent,
    title:'Dulcet - Signup'
   },
   {
    path:'forgotpassword',
    component:ForgotPasswordComponent,
    title:'Dulcet - Forgot Password'
   },
   {
    path:'updatepassword',
    component:UpdatePasswordComponent,
    title:'Dulcet - Update Password'
   },
   {
    path:'payment',
    component:PaymentComponent,
    title:'Dulcet - Payment'
   },
   {
    path:'paymentsuccess',
    component:PaymentSuccessComponent,
    title:'Dulcet - Payment-Success'
   },
   {
    path:'profile',
    component:ProfileComponent,
    children:[
    {
      path:'editprofile',
      component:EditProfileComponent,
      title:'Dulcet - EditProfile'
    },
    {
      path:'subscribedplan',
      component:SubscriptionInfoComponent,
      title:'Dulcet - SubscribedInfo'
    },
    {
      path:'paymentcard',
      component:PaymentCardComponent,
      title:'Dulcet - Paymentcard'
    },
    {
      path:'myplaylist',
      component:MyPlaylistsComponent,
      title:'Dulcet - MyPlaylists'
    },
    {
      path:'accounts',
      component:AccountOverviewComponent,
      title:'Dulcet - AccountOverview'
    }
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }

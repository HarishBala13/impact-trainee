/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
/*  Declaration of Angular Core and Common Modules  */
import { NgModule } from '@angular/core';

/*  Declaration of Custom created Core,Shared and Feature Modules  */
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

/*  Declaration of Custom created Components  */

import { HomeComponent } from './home-feature/home/home.component';
import { SigninComponent } from './signing-feature/signin/signin.component';
import { SignupComponent } from './signing-feature/signup/signup.component';
import { PlaylistsComponent } from './playlist-feature/playlists/playlists.component';
import { LibraryMixedSongsComponent } from './home-feature/library-mixed-songs/library-mixed-songs.component';
import { LibraryTopSongsComponent } from './home-feature/library-top-songs/library-top-songs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureRoutingModule } from './feature-routing.module';
import { ForgotPasswordComponent } from './signing-feature/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './signing-feature/update-password/update-password.component';
import { ProfileComponent } from './profile-feature/profile/profile.component';
import { EditProfileComponent } from './profile-feature/edit-profile/edit-profile.component';
import { AccountOverviewComponent } from './profile-feature/account-overview/account-overview.component';
import { PaymentCardComponent } from './profile-feature/payment-card/payment-card.component';
import { SubscriptionInfoComponent } from './profile-feature/subscription-info/subscription-info.component';
import { MyPlaylistsComponent } from './profile-feature/my-playlists/my-playlists.component';
import { PaymentComponent } from './payment-feature/payment/payment.component';
import { PaymentSuccessComponent } from './payment-feature/payment-success/payment-success.component';
import { PremiumComponent } from './premium-feature/premium/premium.component';
import { SearchComponent } from './search-feature/search/search.component';
import { SearchFilterPipe } from './search-feature/search/search.pipe';
import { SearchedItemsComponent } from './search-feature/searched-items/searched-items.component';
import { SearchedPlaylistsComponent } from './search-feature/searched-playlists/searched-playlists.component';

@NgModule({
  declarations: [
    HomeComponent,
    LibraryTopSongsComponent,
    LibraryMixedSongsComponent,
    SigninComponent,
    SignupComponent,
    PlaylistsComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    AccountOverviewComponent,
    PaymentCardComponent,
    SubscriptionInfoComponent,
    MyPlaylistsComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    PremiumComponent,
    SearchComponent,
    SearchFilterPipe,
    SearchedItemsComponent,
    SearchedPlaylistsComponent
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ],
  exports:[]
})
export class FeatureModule { }

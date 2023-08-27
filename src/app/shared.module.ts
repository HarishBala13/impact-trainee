import { NgModule } from "@angular/core";
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CommonModule } from "@angular/common";
import { FeatureRoutingModule } from "./feature/feature-routing.module";

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
   ],
  exports: [
    NavBarComponent,
    FooterComponent
   ]
})
export class SharedModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthService } from "./models/auth";
import { MainPageComponent } from "@components/main-page";
import { SignInComponent } from '@components/sign-in';
import { SignUpComponent } from '@components/sign-up';

@NgModule({
  declarations: [AppComponent, MainPageComponent, SignInComponent, SignUpComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

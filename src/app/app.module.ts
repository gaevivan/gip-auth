import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthService } from "./models/auth";
import { MainPageComponent } from "@components/main-page";
import { SignInComponent } from "@components/sign-in";
import { SignUpComponent } from "@components/sign-up";
import { FIREBASE_CONFIG } from './firebase.config';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    HttpClientModule
  ],
  providers: [AuthService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
    declarations: [
      AuthPageComponent,
      SignInComponent,
      SignUpComponent
    ],
    imports: [
      SharedModule,
      AuthPageRoutingModule
    ],
    providers: []
  })
  export class AuthPageModule {}
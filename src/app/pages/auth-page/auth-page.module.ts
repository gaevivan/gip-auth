import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AuthPageComponent } from './auth-page.component';

@NgModule({
    declarations: [
      AuthPageComponent
    ],
    imports: [
      SharedModule
    ],
    providers: []
  })
  export class AuthPageModule { }
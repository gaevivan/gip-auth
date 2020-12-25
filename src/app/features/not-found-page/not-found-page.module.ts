import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
    declarations: [
      NotFoundPageComponent
    ],
    imports: [
      SharedModule
    ],
    providers: []
  })
  export class NotFoundPageModule { }
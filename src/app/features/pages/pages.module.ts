import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AuthPageModule } from '../auth-page/auth-page.module';
import { NotFoundPageModule } from '../not-found-page/not-found-page.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [],
    imports: [
      SharedModule,
      NotFoundPageModule,
      AuthPageModule,
      PagesRoutingModule
    ],
    providers: []
  })
  export class PagesModule { }
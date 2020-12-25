import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './features/pages/pages.module';
import { IssuesState } from './shared/stores/issues/issues.store';
import { ProjectsState } from './shared/stores/projects/projects.store';
import { UsersState } from './shared/stores/users/users.store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    NgxsModule.forFeature([
      IssuesState,
      ProjectsState,
      UsersState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

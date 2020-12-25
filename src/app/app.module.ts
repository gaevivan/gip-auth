import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RecordsState } from './shared/stores/records/records.store';
import { ProjectsState } from './shared/stores/projects/projects.store';
import { UsersState } from './shared/stores/users/users.store';
import { AppRoutingModule } from './app-routing.module';
import { CurrentProjectState } from './shared/stores/current-project/current-project.store';
import { CredentialsFeatureModule } from './features/credentials/credentials.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxsModule.forRoot([
      RecordsState,
      ProjectsState,
      UsersState,
      CurrentProjectState,
    ]),
    CredentialsFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

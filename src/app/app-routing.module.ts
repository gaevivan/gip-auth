import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from '@components/main-page';
import { AuthService } from '@models/auth';

const routes: Routes = [
    {
        path: "**",
        component: MainPageComponent,
        canActivate: [AuthService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

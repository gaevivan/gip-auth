import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/injectables/guards/auth.guard';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthPageModule } from './auth-page/auth-page.module';

const routes: Routes = [
    {
        path: '',
        component: AuthPageComponent,
        loadChildren: (): Promise<Type<AuthPageModule>> =>
            import('./auth-page/auth-page.module').then((module) => module.AuthPageModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/injectables/guards/auth.guard';
import { AuthPageModule } from './auth-page/auth-page.module';

const routes: Routes = [
    {
        path: '**',
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

import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageModule } from '@app/auth-page/auth-page.module';
import { AuthGuard } from '@app/shared/injectables/guards/auth.guard';

const routes: Routes = [
    {
        path: '**',
        loadChildren: (): Promise<Type<AuthPageModule>> =>
            import('./../auth-page/auth-page.module').then((module) => module.AuthPageModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    {
        path: 'sign-in',
        component: SignInComponent,
        data: {
            title: 'Авторизация',
        }
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
            title: 'Регистрация',
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthPageRoutingModule { }
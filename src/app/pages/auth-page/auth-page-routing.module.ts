import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { AuthPageComponent } from './auth-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    {
        path: 'sign-in',
        component: AuthPageComponent,
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Авторизация',
                }
            }
        ]
    },
    {
        path: 'sign-up',
        component: AuthPageComponent,
        children: [
            {
                path: '',
                component: SignUpComponent,
                data: {
                    title: 'Регистрация',
                }
            }
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthPageRoutingModule { }
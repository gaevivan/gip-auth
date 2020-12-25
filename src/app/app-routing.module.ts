import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './features/pages/pages.module';

const routes: Routes = [
    {
        path: '**',
        loadChildren: (): Promise<Type<PagesModule>> =>
            import('./features/pages/pages.module').then((module) => module.PagesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

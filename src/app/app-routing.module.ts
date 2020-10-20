import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';
// import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
    {
        path: '**',
        loadChildren: (): Promise<Type<PagesModule>> =>
            import('./pages/pages.module').then((module) => module.PagesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

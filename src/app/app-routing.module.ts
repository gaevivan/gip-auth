import { NgModule, Type } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundPageFeatureModule } from "./features/not-found-page/not-found-page.module";
import { RecordListPageFeatureModule } from "./features/record-list-page/record-list-page.module";
import { RecordPageFeatureModule } from "./features/record-page/record-page.module";

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'records'
  },
  {
    path: "records",
    loadChildren: (): Promise<Type<RecordListPageFeatureModule>> =>
      import("./features/record-list-page/record-list-page.module").then(
        (module) => module.RecordListPageFeatureModule
      ),
  },
  {
    path: "records/:index",
    loadChildren: (): Promise<Type<RecordPageFeatureModule>> =>
      import("./features/record-page/record-page.module").then(
        (module) => module.RecordPageFeatureModule
      ),
  },
  {
    path: "**",
    loadChildren: (): Promise<Type<NotFoundPageFeatureModule>> =>
      import("./features/not-found-page/not-found-page.module").then(
        (module) => module.NotFoundPageFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

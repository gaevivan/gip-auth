import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecordListPageComponent } from "./record-list-page.component";

const ROUTES: Routes = [
  {
    path: '',
    component: RecordListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RecordListPageRoutingModule {}

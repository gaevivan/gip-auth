import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecordPageComponent } from "./record-page.component";

const ROUTES: Routes = [
  {
    path: '',
    component: RecordPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RecordPageRoutingModule {}

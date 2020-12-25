import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { RecordFeatureModule } from "../record/record.module";
import { RecordListPageRoutingModule } from "./record-list-page-routing.module";
import { RecordListPageComponent } from "./record-list-page.component";

@NgModule({
  declarations: [RecordListPageComponent],
  exports: [RecordListPageComponent],
  imports: [SharedModule, RecordFeatureModule, RecordListPageRoutingModule]
})
export class RecordListPageFeatureModule {}

import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { RecordFeatureModule } from "../record/record.module";
import { RecordPageRoutingModule } from "./record-page-routing.module";
import { RecordPageComponent } from "./record-page.component";

@NgModule({
  declarations: [RecordPageComponent],
  exports: [RecordPageComponent],
  imports: [SharedModule, RecordFeatureModule, RecordPageRoutingModule]
})
export class RecordPageFeatureModule {}

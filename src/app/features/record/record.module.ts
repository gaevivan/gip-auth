import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { RecordCardComponent } from "./record-card/record-card.component";

@NgModule({
  declarations: [RecordCardComponent],
  exports: [RecordCardComponent],
  imports: [SharedModule],
})
export class RecordFeatureModule {}

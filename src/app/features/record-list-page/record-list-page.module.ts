import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { RecordCardComponent } from "./components/record-card/record-card.component";
import { RecordListPageRoutingModule } from "./record-list-page-routing.module";
import { RecordListPageComponent } from "./record-list-page.component";

@NgModule({
  declarations: [RecordListPageComponent, RecordCardComponent],
  imports: [SharedModule, RecordListPageRoutingModule]
})
export class RecordListPageFeatureModule {}

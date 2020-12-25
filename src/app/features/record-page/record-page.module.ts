import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { BaseCardComponent } from "./base-card/base-card.component";
import { RecordPageRoutingModule } from "./record-page-routing.module";
import { RecordPageComponent } from "./record-page.component";

@NgModule({
  declarations: [RecordPageComponent, BaseCardComponent],
  imports: [SharedModule, RecordPageRoutingModule]
})
export class RecordPageFeatureModule {}

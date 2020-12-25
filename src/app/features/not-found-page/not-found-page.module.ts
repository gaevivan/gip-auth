import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { NotFoundPageRoutingModule } from "./not-found-page-routing.module";
import { NotFoundPageComponent } from "./not-found-page.component";

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [SharedModule, NotFoundPageRoutingModule],
  providers: [],
})
export class NotFoundPageFeatureModule {}

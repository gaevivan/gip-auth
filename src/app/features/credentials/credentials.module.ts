import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { CredentialsComponent } from "./credentials.component";

@NgModule({
  declarations: [CredentialsComponent],
  exports: [CredentialsComponent],
  imports: [SharedModule]
})
export class CredentialsFeatureModule {}
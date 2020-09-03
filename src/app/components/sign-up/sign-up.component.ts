import { Component } from "@angular/core";
import { AuthService } from '@models/auth';

@Component({
    selector: "sign-up",
    templateUrl: "sign-up.component.html"
})
export class SignUpComponent {
    constructor(
        public auth: AuthService
    ) {}
}
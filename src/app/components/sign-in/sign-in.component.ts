import { Component } from "@angular/core";
import { AuthService } from '@models/auth';

@Component({
    selector: "sign-in",
    templateUrl: "sign-in.component.html"
})
export class SignInComponent {
    constructor(
        public auth: AuthService
    ) {}
}